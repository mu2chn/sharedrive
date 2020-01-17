const API = {
    sendInput(text) {
        const encoded = encodeURI(text);
        return fetch(`/search?search=${text}`)
            .then((response) => {
                if(response.ok){
                    // console.log(response);
                    return response.json()
                }
                else {
                    throw new Error()
                }
            })
    }
};

export default API
