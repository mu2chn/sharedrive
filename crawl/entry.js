const Crawl = require('./crawl');


const crawl = new Crawl({
    url: "https://drive.google.com/drive/folders/1-UkT9OuSsDfv32wCWAeDWW4A_PLFU1Jx",
    param: []
});
crawl.exec(console.log);
