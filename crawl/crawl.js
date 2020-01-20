const crawlDrive = require('./googleDrive');

// option = {
//     url: "https://drive.google.com/drive/folders/1--iD6S3z9YR4Y7_TJEg7mHOkoNU4uzts",
//     param: ["information", "math"]
// }
function Crawl(option){
    this.baseUrl = null;
    this.crawler = null;
    this.param = option.param;
    this.rootUrl = option.rootUrl;
    this.init(option.url);
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

    exec(callBack){
        const result = this.crawler("http://" + this.baseUrl, this.param, this.rootUrl, callBack);
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
    },


};

module.exports = Crawl;
