import API from "./api.js";
function main() {
    document.querySelector("#search-button").addEventListener("click", searchText, false);
}

async function searchText(e){
    const text = document.querySelector("#search-box").value;
    const result = await API.sendInput(text);
    // console.log(result);
}

main();
