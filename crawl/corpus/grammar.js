const kuromoji = require('kuromoji');

function basedOnGrammar(text){
    return new Promise((resolve, reject) => {
        kuromoji.builder({dicPath: "./node_modules/kuromoji/dict"})
        .build((err, tokenizer) => {
            if(err){
                reject(err);
            }
            const tokens = tokenizer.tokenize(text);
            resolve(tokens);
        });
    })
}

async function Analyze(text){
    const token = await basedOnGrammar(text);
    return token.map(t => t.surface_form);
}

module.exports = Analyze;
