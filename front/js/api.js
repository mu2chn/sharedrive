const API = {
    sendInput(text) {
        const encoded = encodeURI(text);
        return fetch(`/search?search=${text}`)
            .then((respnse) => {
                if(respnse.ok){
                    // console.log(respnse);
                    return respnse
                }
                else {
                    throw new Error()
                }
            })
    }
};

export default API
