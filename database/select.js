const connectDB = require('./db');

const Select = {
    getByName(tableName, callback) {
        connectDB(tableName, (collection) => {
            collection.find().toArray((err, doc) => {
                callback(doc);
            });
        })
    },

    search(textArr, callback){
        console.log(textArr);
        connectDB('inverted_index', (collection) => {
            collection.find({key: {$in: textArr}}).limit(20).toArray((err, doc) => {
                console.log(doc);
                return doc
                // callback(doc);
            });
        })
    }
};

module.exports = Select;
