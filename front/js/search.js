import API from "./api.js";
function main() {
    const targets = document.querySelectorAll(".results");
    for(let t of targets){
        setTitle(t)
    }
}

async function setTitle(tag){
    const url = tag.getAttribute("href");
    const title = await API.getTitle(url);
    tag.innerHTML = title;
}

main();
