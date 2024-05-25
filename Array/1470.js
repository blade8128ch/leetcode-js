//一陣列給n , 2*n即為陣列長度, 把陣列對半切然後交叉放入一陣列

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    let xArray = nums.slice(0, n)
    let yArray = nums.slice(n)
    let newArray = []
    let i = 0
    while (i < n) {
        newArray.push(xArray[i])
        newArray.push(yArray[i])
        i++
    }
    return newArray
};
