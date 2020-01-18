const corpus = require('../crawl/corpus/ngram')

function orderStr(search) {
    const textList = search.split(/ |　|,|、/); //.map(t => textList.push(...corpus(t)));
    const corpused =  textList.map(t => corpus(t));
    // const result = [];
    // corpused.map(c => result.push({"key":{ $in: c}}));
    // return {$and: result};
    return corpused;
}

module.exports = orderStr;
