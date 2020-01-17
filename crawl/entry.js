const Crawl = require('./crawl');

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
            console.log(op);
        }
    }
}
