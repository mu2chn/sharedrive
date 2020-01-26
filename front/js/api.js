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

    sendUrl(url){
        return fetch(`/clicked?url=${encodeURI(url)}`)
            .then(response => console.log(response))
            .catch(reason => console.log(reason))
        },

    sendImg(tragetFile){
        const imgurAxios = axios.create({
            baseURL: "https://api.imgur.com/3/image"
        });
        const imgurData = new FormData();
        imgurData.append("image", tragetFile);
        imgurAxios.defaults.headers.common["Authorization"] = `Client-ID d45fcc7ee858cf5`;
        return imgurAxios.post("", imgurData)
            .then(function(res) {
                    return res.data.data.link;
            })
            .catch(function(err) {
                console.log(err);
            });
    }
};

export default API
