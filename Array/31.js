//可視為以下情境,給一組數字,從個十百千..,開始排列組合出新數字,新數字要大於舊數字,且要最貼近舊數字的
//[1,3,2] => [2,1,3]
//[2,3,1] => [3,1,2]

//先解決ASC跟DESC的情況

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {

    //DESC
    if (nums.every((v, i, a) => !i || v <= a[i - 1])) {
        nums.reverse()
    }
    //ASC
    else if (nums.every((v, i, a) => !i || v >= a[i - 1])) {
        let tmp = nums.at(-1)
        nums[nums.length - 1] = nums.at(-2)
        nums[nums.length - 2] = tmp
    }

    //從後面開始看,後者大於前者x,就可做交換
    //從已比對的數組中,與x正差最小者做交換, 剩下的數組(含x)排列出最小即可
    else {
        let i = 1
        newArray = []
        while (nums[nums.length - i] <= nums[nums.length - i - 1]) {
            newArray.push(nums[nums.length - i])
            i++
        }
        let x = nums[nums.length - i - 1]

        newArray.push(nums[nums.length - i])
        //x之後的數組都已放入比對陣列

        //先升密,大於x就返回,即找出與x正差最小者
        newArray.sort((a, b) => a - b)

        for (let j = 0; j < newArray.length; j++) {
            if (newArray[j] > x) {
                nums[nums.length - i - 1] = newArray[j]

                break
            }

        }

        //把正差最小者從比對陣列移除
        const index = newArray.indexOf(nums[nums.length - i - 1]);
        if (index > -1) {
            newArray.splice(index, 1);
        }

        //x放入比對陣列
        newArray.push(x)

        //比對陣列的數組小到大排列再放入新陣列
        newArray.sort((a, b) => a - b)
        nums.splice(nums.length - i, i, ...newArray)

    }
};
