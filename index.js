const express = require("express");
const app = express();
const corpus = require('./crawl/corpus/ngram');
const connectDB = require('./database/db');

/* 2. listen()メソッドを実行して3000番ポートで待ち受け。*/
const server = app.listen(3000, function () {
    console.log("Node.js is listening to PORT:" + server.address().port);
});
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/front'));

app.get("/", (req, res, next) => {
    res.render("index", {})
});
app.get("/s", (req, res, next) => {
    const search = req.query.search;
    const textList = corpus(search);
    connectDB('inverted_index', (collection) => {
        collection.find({key: {$in: textList}}).limit(20).toArray((err, doc) => {
            res.render('search', {results: doc})
        });
    })
});
app.get("/search", (req, res, next) => {
    const search = req.query.search;
    const textList = corpus(search);
    connectDB('inverted_index', (collection) => {
        collection.find({key: {$in: textList}}).limit(20).toArray((err, doc) => {
            res.json(doc)
        });
    })

    // res.json([{id: 1, url: "drive292"}, {id: 8, url: "cloud802"}]);
});
