//檢查字串是否包含特定字元

/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
    let newArray = []
    words.forEach((item, index) => {
        if (item.includes(x))
            newArray.push(index)
    })
    return newArray
};
