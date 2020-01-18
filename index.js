const express = require("express");
const app = express();
const orderStr = require('./database/order');
const connectDB = require('./database/db');

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, function () {
    console.log("Node.js is listening to PORT:" + server.address().port);
});
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/front'));

app.get("/", (req, res, next) => {
    res.render("index", {})
});
app.get("/s", (req, res, next) => {
    const search = req.query.search;
    const corpused = orderStr(search);
    const result = [];
    corpused.map(c => result.push({"key":{ $in: c}}));

    connectDB('inverted_index', (collection) => {
        collection
            // .find({$or: result})
            .aggregate([
                {
                    $match: {$or: result}
                },
                {
                    $group: {
                        _id: "$url",
                        title: {$first: '$title'},
                        count: { $sum: 1 }
                    }
                },
                {
                    $sort: {count: -1}
                }])
            .limit(20).toArray((err, sort) => {
                const find = [];
                sort.map(d => find.push({url: d["_id"], title: d["title"]}));
                res.render('search', {results: find});
                // console.log(find);

            });
    })
});





// app.get("/search", (req, res, next) => {
//     const search = req.query.search;
//     const textList = corpus(search);
//     connectDB('inverted_index', (collection) => {
//         collection.find({key: {$in: textList}}).limit(20).toArray((err, doc) => {
//             res.json(doc)
//         });
//     })
//
//     // res.json([{id: 1, url: "drive292"}, {id: 8, url: "cloud802"}]);
// });
