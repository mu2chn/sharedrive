function getData(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            const gar = document.querySelector('#galaxyIframe').contentWindow;
            gar.document.querySelector('[data-name="ID-export"]').click()
            gar.document.querySelector('.ACTION-back').click()
            setTimeout(resolve, 5000);
        }, 5000);
    })
}

function getUserListNode(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            const gar = document.querySelector('#galaxyIframe').contentWindow;
            const list = gar.document.querySelectorAll(".C_USER_LIST_TEXT_DIV");
            resolve(list);
        }, 1000)
    })
}

async function main(){
    for(let i=101; i<1500; i++){
        const user = await getUserListNode();
        user[i].click();
        await getData();
    }
}

setTimeout(main, 10000);