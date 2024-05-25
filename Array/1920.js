//輸入一陣列a,元素的值皆為正整數,所有的值將轉換為a的index,a[index]依序填入新陣列

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    const newArray=[]
    nums.forEach((item, index)=>{
        newArray.push(nums[item])
    })
    return newArray
};
