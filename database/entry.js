const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const uri = "mongodb+srv://fuse:NKJztfE9EJscJIGF@searchdrive-uff1m.mongodb.net/search_url?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("search_url").collection("root_url");

    // collection.insertOne({
    //     url: "https://drive.google.com/drive/folders/1808AMUpxcwwA0CM15AWgzvRIWw6gZS3_"
    // });

    collection.find().toArray((err, doc) => {
        console.log(doc)
    });

    client.close();
});
