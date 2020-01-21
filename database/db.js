const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const URI = "mongodb+srv://fuse:NKJztfE9EJscJIGF@searchdrive-uff1m.mongodb.net/search_url?retryWrites=true&w=majority";

function connectDB(name, callback){
    const client = new MongoClient(URI, { useNewUrlParser: true });
    client.connect( async err => {
        const  collection = client.db("search_url").collection(name);
        await callback(collection);

        console.log(err);
        client.close();
    });
}

module.exports = connectDB;

