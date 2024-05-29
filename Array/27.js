//為26的變化,原本是刪除重複值,現在是刪除特定值


/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for (let i = 0; i < nums.length ; i++) {

        if (nums[i] === val) {

            nums.splice(i , 1)
            i--

        }
    }
    return nums.length
};
