const express = require("express");
const app = express();
const corpus = require('./crawl/corpus/ngram');
const Select = require('./database/select');

/* 2. listen()メソッドを実行して3000番ポートで待ち受け。*/
const server = app.listen(3000, function () {
    console.log("Node.js is listening to PORT:" + server.address().port);
});
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/front'));
app.get("/", (req, res, next) => {
    res.render("index", {})
});

app.get("/search", async (req, res, next) => {
    const search = req.query.search;
    const textList = corpus(search);
    res.json(await Select.search(textList, res.json))

    // res.json([{id: 1, url: "drive292"}, {id: 8, url: "cloud802"}]);
});
