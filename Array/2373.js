//可當作max pooling的實作,參考https://ithelp.ithome.com.tw/articles/10337086?sc=rss.iron的圖片就可理解題目在做什麼
//使用3*3的池化窗口來選取最大值

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
    let n = grid.length
    let windowArray = []
    let maxArray = []
    //將回傳陣列設為2D陣列
    for (let i = 0; i < n - 2; i++) {
        maxArray[i] = []; // Each row is an empty array
    }
    //定義window滑動次數
    for (let i = 0; i < n - 2; i++) {
        for (let j = 0; j < n - 2; j++) {

            //填入一個window,取完3*3個值
            for (let x = i; x < i + 3; x++) {
                for (let y = j; y < j + 3; y++) {
                    windowArray.push(grid[x][y])
                }
            }
            maxArray[i][j] = Math.max(...windowArray)
            windowArray = []  //將window清空,以進行下一輪
        }
    }
    return maxArray

};
