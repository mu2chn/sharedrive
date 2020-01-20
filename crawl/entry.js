const Crawl = require('./crawl');
const corpus = require('./corpus/ngram');
const Insert = require('../database/insert');
const Util = require('./util');

const firstOP = [{
    url: "https://drive.google.com/drive/folders/1z7vIicim00c2jt8adfRLiLFFWxMZzj7h",
    type: "folder",
    param: []
}];
firstOP[0].rootUrl = firstOP[0].url;
let waitTime = 0;
recursionCrawl(firstOP);

function recursionCrawl(option) {
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

async function inverted(op) {
    const param = Util.delDuplicated(op.param);
    const url = op.url;
    const title = param.join(" ");
    const rootUrl = op.rootUrl;


    let separatedParam = [];
    for(let text of param){
        const txt = await corpus(text);
        Array.prototype.push.apply(separatedParam, txt)
    }
    Insert.insertInverted(separatedParam, url, title, rootUrl);
}
