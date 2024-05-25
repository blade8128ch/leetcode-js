//給一陣列,每兩個值代表[頻率,值],將頻率*值放入新陣列


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
    let newArray = []

    while (nums.length > 0) {
        let eachAdjacentPair = nums.splice(0, 2)//會修改原陣列
        for (let i = 0; i < eachAdjacentPair[0]; i++) {
            newArray.push(eachAdjacentPair[1])
        }

    }
    return newArray
};

