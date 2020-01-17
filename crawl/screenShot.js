const fs = require('fs');
const Chromy = require('chromy');
const chromy = new Chromy();

async function screenshot(url) {
    try {
        await chromy.goto(url);
        await chromy.wait(1000);
        const png = await chromy.screenshotDocument();
        fs.writeFileSync('out.png', png);
        await chromy.close()
    } catch (e) {
        console.log(e);
        chromy.close()
    }
}

module.exports = screenshot;
