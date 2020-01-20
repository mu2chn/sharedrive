const Crawl = require('./crawl');
const corpus = require('./corpus/ngram');
const Insert = require('../database/insert');
const Util = require('./util');

const firstOP = [{
    url: "https://drive.google.com/drive/u/0/folders/1qM0a4CrHwB_xXh2k9gg1EZH76CoenOp9",
    type: "folder",
    param: []
}];

let waitTime = 0;
recursionCrawl(firstOP);

function recursionCrawl(option) {
    option.rootUrl = option.url;
    for (let op of option){
        if (op.type==="folder"){
            const crawl = new Crawl(op);
            setTimeout( () => {
                crawl.exec(recursionCrawl);
            }, 5000*(waitTime++))
        }
        else {
            // console.log(op);
            inverted(op)
        }
    }
}

function inverted(op) {
    const param = Util.delDuplicated(op.param);
    const url = op.url;
    const title = param.join(" ");


    let separatedParam = [];

    for(let text of param){
        Array.prototype.push.apply(separatedParam, corpus(text))
    }
    Insert.insertInverted(separatedParam, url, title);
    // console.log(separatedParam);
    // console.log(url);
}
