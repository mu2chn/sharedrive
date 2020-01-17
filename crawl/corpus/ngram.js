function ngram(text) {
    let n = 2;
    let max = text.length - n + 1;
    if (max <= 0) {
        max = 1;
        n = text.length;
    }

    const result = [];
    for (let i=0; i<max; i++){
        result.push(text.slice(i, i+n))
    }

    return result;
}
module.exports = ngram;
