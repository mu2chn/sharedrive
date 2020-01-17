const Chromy = require('chromy');
const chromy = new Chromy();

function crawlDrive(url){
    chromy.chain()
        .goto(url)
        .wait(8000)
        .evaluate(_ => {
            return document.querySelectorAll(".Q5txwe");
        })
        // .result(r => console.log(r))
        .end()
        .catch(e => console.log(e))
        .then(_ => chromy.close());
}

module.exports = crawlDrive;
