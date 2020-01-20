const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const URI = "mongodb+srv://fuse:NKJztfE9EJscJIGF@searchdrive-uff1m.mongodb.net/search_url?retryWrites=true&w=majority";

function connectDB(name, callback){
    const client = new MongoClient(URI, { useNewUrlParser: true });
    client.connect(err => {
        const collection = client.db("search_url").collection(name);
        callback(collection);

        // collection.insertOne({
        //     url: "https://drive.google.com/drive/folders/1808AMUpxcwwA0CM15AWgzvRIWw6gZS3_"
        // });

        // collection.find().toArray((err, doc) => {
        //     console.log(doc)
        // });
        console.log(err);
        client.close();
    });
}

module.exports = connectDB;

