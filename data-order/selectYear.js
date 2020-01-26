const connectDB = require('../database/db');
function selectYear(){
    connectDB('inverted_index3', (collection) => {
        for (let i=2000; i<2017; i++){
            const regExp = new RegExp('.*' + i + '.*');
            // const regExp = new RegExp('.*人社 2017後期.*' + i + '.*');
            collection.update({title: regExp}, {$set: {"year": i}}, { multi: true })
        }
        // collection.update({title: /.*人社 2017.*/}, {$set: {"year": null}}, {multi: true})
        // for(let i=20; i<32; i++){
        //     const regExp = new RegExp('.*H' + i + '.*');
        //     collection.update({title: regExp}, {$set: {"year": i+1988}}, { multi: true })
        // }
        // for(let i=0; i< 21; i++){
        //     const regExp = new RegExp('.*' + i + '年.*');
        //     collection.update({title: regExp, year: null}, {$set: {"year": 2000+i}}, { multi: true })
        // }
    });
}
selectYear();
