const Crawl = require('./crawl');


const crawl = new Crawl({
    url: "https://drive.google.com/drive/folders/1--iD6S3z9YR4Y7_TJEg7mHOkoNU4uzts",
    param: []
});
crawl.exec(console.log);
