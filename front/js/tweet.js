import API from "./api.js";
function tweet() {
    const inputs = document.querySelectorAll('.tweet');
    const atag = document.querySelector('#tweet');
    for (let input of inputs){
            input.addEventListener("change", async (e) => {
                const loading = document.querySelector('#loading');
                loading.style.display = "block";
                const url = await API.sendImg(e.target.files[0]);
                const content = encodeURI(`科目名：\n教授名：\n画像リンク：https://engine.face9363.net/imgur?img=${encodeURI(url.split('/').pop())}\n年度：2020 後期\n（以下ご自由にどうぞ）`);
                const href = `https://twitter.com/intent/tweet?screen_name=ku_search&text=${content}`;
                atag.href = href;
                setTimeout(()=>{
                    loading.style.display = "none";
                }, 300);
                atag.click();
        })
    }
}

tweet();
