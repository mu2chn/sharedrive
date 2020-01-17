const connectDB = require('./db');

const Insert = {
    insertInverted(keyList, url, title) {
        const arr = [];
        keyList.map(k => arr.push({key: k, url: url, title: title}));
        connectDB("inverted_index", (collection) => {
            collection.insertMany(arr)
        })
    }
};

module.exports = Insert;
