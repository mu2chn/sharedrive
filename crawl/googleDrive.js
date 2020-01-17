const Chromy = require('chromy');
const fetch = require('node-fetch');
// port 10000~10100 を使用
let port = 0;

function crawlDrive(url, param, callback){
    const chromy = new Chromy({port: 10000 + (port++)%100});
    chromy.chain()
        .goto(url)
        .wait(8000)
        .evaluate(_ => {
            return document.querySelectorAll(".Q5txwe");
        })
        .result(async r => {
            const result = [];
            for(let key of Object.keys(r)){
                const data = r[key]; //r[parseInt(key)];
                const folderKey = data["__incrementalDOMData"]["key"].split(":").pop();

                const response = await fetch("https://drive.google.com/drive/folders/"+folderKey);

                if(response.ok){
                    result.push({
                        url: "https://drive.google.com/drive/folders/"+folderKey,
                        type: "folder",
                        param: param.concat([data["__incrementalDOMData"]["H"][1]])
                    })
                }
                else {
                    result.push({
                        url: "https://drive.google.com/file/d/"+folderKey,
                        type: "file",
                        param:  param.concat([data["__incrementalDOMData"]["H"][1]])
                    })
                }
            }
            callback(result);
        })
        .end()
        .catch(e => console.log(e))
        .then(_ => chromy.close());
}

module.exports = crawlDrive;
