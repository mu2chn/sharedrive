const kuromoji = require('kuromoji');

module.exports = function createTokenizer(){
    return new Promise((resolve, reject) => {
        kuromoji.builder({dicPath: "./node_modules/kuromoji/dict"})
            .build((err, tokenizer) => {
                resolve(tokenizer);
            });
    })
};
