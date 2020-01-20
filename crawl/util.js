const Util = {
    separateParam(str){
        const split = str.replace(/\.[a-zA-Z]{3,4}$/, "")
            .split(/[・|\(|\)|（|）|\[|\]|,| |　|_]+/);
        return split
    },
    delDuplicated(list){
        const listLen = list.length;
        const newList = [];
        for(let i=0; i<listLen; i++){
            if(!newList.includes(list[i])){
                newList.push(list[i]);
            }
        }
        return newList;
    }
};

module.exports = Util;
