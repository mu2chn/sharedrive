const connectDB = require('./db');

const Insert = {
    insertInverted(keyList, url, title, rootUrl) {
        const arr = [];
        keyList.map(k => arr.push({key: k, url: url, title: title, rootUrl: rootUrl}));
        connectDB("inverted_index3", (collection) => {
            collection.insertMany(arr)
        })
    }
};

module.exports = Insert;
