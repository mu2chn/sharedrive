const express = require("express");
const app = express();

/* 2. listen()メソッドを実行して3000番ポートで待ち受け。*/
const server = app.listen(3000, function () {
    console.log("Node.js is listening to PORT:" + server.address().port);
});
app.set('view engine', 'ejs')

app.get("/", (req, res, next) => {
    res.render("index", {})
})

// app.get("/api/photo/list", function(req, res, next){
//     res.json(photoList);
// });
