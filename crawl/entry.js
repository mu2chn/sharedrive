const Crawl = require('./crawl');
const corpus = require('./corpus/ngram');
const Insert = require('../database/insert');

const firstOP = [{
    url: "https://drive.google.com/drive/folders/1--iD6S3z9YR4Y7_TJEg7mHOkoNU4uzts",
    type: "folder",
    param: []
}];

recursionCrawl(firstOP);

function recursionCrawl(option) {
    for (let op of option){
        if (op.type==="folder"){
            const crawl = new Crawl(op);
            crawl.exec(recursionCrawl);
        }
        else {
            // console.log(op);
            inverted(op)
        }
    }
}

function inverted(op) {
    const param = op.param;
    const url = op.url;
    const title = op.param.join(" ")

    let separatedParam = [];

    for(let text of param){
        Array.prototype.push.apply(separatedParam, corpus(text))
    }
    Insert.insertInverted(separatedParam, url, title);
    // console.log(separatedParam);
    // console.log(url);
}
