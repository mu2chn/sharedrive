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
    }
};

export default API
