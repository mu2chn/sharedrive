const crawlDrive = require('./googleDrive');

// crawlDrive("https://drive.google.com/drive/folders/1--iD6S3z9YR4Y7_TJEg7mHOkoNU4uzts");

function Crawl(url){
    this.baseUrl = null;
    this.crawler = null;
    this.init(url);
}

Crawl.prototype = {
    init(url){
        this.baseUrl = this._$shorterUrl(url);
        // クローラーのセット
        const domain = this._$getDomain(this.baseUrl);
        switch (domain){
            case "drive.google.com":
                this.crawler = crawlDrive;
                break;
            default:
                break;
        }
    },

    async exex(){
        const result = await this.crawler("http://" + this.baseUrl);
        console.log(result)
        return result;
    },

    _$shorterUrl(url){
        const regex = /https?:\/\/.*/;
        if(url.match(regex)){
            url = url.replace(/https?:\/\//, "");
        }
        return url;
    },

    _$getDomain(url){
        this._$shorterUrl(url);
        const splitUrl = url.split("/");
        return splitUrl[0];
    }
};

module.exports = Crawl;
