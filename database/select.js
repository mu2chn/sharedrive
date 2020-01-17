const connectDB = require('./db');

const Select = {
    getByName(tableName, callback) {
        connectDB(tableName, (collection) => {
            collection.find().toArray((err, doc) => {
                callback(doc);
            });
        })
    }
}

module.exports = Select;
