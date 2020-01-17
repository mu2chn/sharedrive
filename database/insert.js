const connectDB = require('./db');

const Insert = {
    insertInverted(keyList, url) {
        const arr = [];
        keyList.map(k => arr.push({key: k, url: url}));
        connectDB("inverted_index", (collection) => {
            collection.insertMany(arr)
        })
    }
};

module.exports = Insert;
