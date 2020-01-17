const Chromy = require('chromy');
const chromy = new Chromy();

const fs = require('fs');

async function screenshot() {
    try {
        await chromy.goto('https://drive.google.com/drive/folders/1--iD6S3z9YR4Y7_TJEg7mHOkoNU4uzts')
        const png = await chromy.screenshotDocument()
        fs.writeFileSync('out.png', png)
        await chromy.close()
    } catch (e) {
        console.log(e);
        chromy.close()
    }
}
// screenshot();
function crawlDrive(){
    chromy.chain()
        .goto("https://drive.google.com/drive/folders/1--iD6S3z9YR4Y7_TJEg7mHOkoNU4uzts")
        .wait(5000)
        .evaluate(_ => {
            return document.querySelectorAll(".Q5txwe");
        })
        .result(r => console.log(r))
        .end()
        .catch(e => console.log(e))
        .then(_ => chromy.close());
}
crawlDrive();
