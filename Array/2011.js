//讀取陣列內的'++'或'--',作加減運算

//兩種方法都是O(n)

/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
    let x = 0
    // operations.forEach((item) => {
    //     if (item.includes('--')) {
    //         x--
    //     } else {
    //         x++
    //     }
    // })

    let excludeArray = operations.filter(item => item.includes('--'))
    let includeArray = operations.filter(item => item.includes('++'))
    x = includeArray.length - excludeArray.length
    return x
};
