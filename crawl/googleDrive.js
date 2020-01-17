const Chromy = require('chromy');
const chromy = new Chromy();

function crawlDrive(url, callback){
    chromy.chain()
        .goto(url)
        .wait(8000)
        .evaluate(_ => {
            return document.querySelectorAll(".Q5txwe");
        })
        .result(r => {callback(r)})
        .end()
        .catch(e => console.log(e))
        .then(_ => chromy.close());
}

module.exports = crawlDrive;
