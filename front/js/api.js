const API = {
    sendInput(text) {
        const encoded = encodeURI(text);
        return fetch(`/search?search=${text}`)
            .then((response) => {
                if(response.ok){
                    return response.json()
                }
                else {
                    throw new Error()
                }
            })
    },

    getTitle(url){
        return fetch(url)
            .then(response => {
                if(response.ok){
                    return response.text().match(/<title>(.*)<\/title>/)[1]
                }
                else {
                    throw new Error()
                }
            })
    },

    // sendUrl(url){
    //     return fetch("/crawl", {
    //         method: "POST",
    //         headers: {"Content-Type": "application/json; charset=utf-8",},
    //     })
    // }

};

export default API
