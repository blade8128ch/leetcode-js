//依照討論區的提示,對原陣列做修改,只保留唯一值

//The variable i in the for...in loop is a string, not a number


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {

    for (let i = 0; i < nums.length - 1; i++) {

        if (nums[i] === nums[i + 1]) {

            nums.splice(i + 1, 1)
            i--

        }
    }
    return nums.length

};
