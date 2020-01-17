const Chromy = require('chromy');
const chromy = new Chromy();
const fetch = require('node-fetch');

function crawlDrive(url, param, callback){
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
                        param: param + [data["__incrementalDOMData"]["H"][1]]
                    })
                }
                else {
                    result.push({
                        url: "https://drive.google.com/file/d/"+folderKey,
                        type: "file",
                        param: param + [data["__incrementalDOMData"]["H"][1]]
                    })
                }
            }
            callback(result)
        })
        .end()
        .catch(e => console.log(e))
        .then(_ => chromy.close());
}

module.exports = crawlDrive;
