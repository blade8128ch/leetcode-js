//陣列內兩個相同的值為一對,共可找幾對?

//依提示的公式,找出一number出現n(>1)次,即可算出有幾對
//用filter一直過濾出相同值和不相同值的陣列


/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    let count = 0
    while (nums.length > 0) {
        let excludeArray = nums.filter(item => item === nums[0])
        let includeArray = nums.filter(item => item !== nums[0])
        nums = includeArray
        let n = excludeArray.length
        count += n * (n - 1) / 2
    }
    return count
};
