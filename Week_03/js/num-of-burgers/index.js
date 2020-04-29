/*
 * @lc app=leetcode.cn id=1276 lang=javascript
 *
 * [1276] 不浪费原料的汉堡制作方案
 */

// @lc code=start
/**
 * 第一种方法
 * 解题思路：数学公式求x和y
 * 时间复杂度：O(1)
 * 空间复杂度：O(1)
 */

/**
 * @param {number} tomatoSlices
 * @param {number} cheeseSlices
 * @return {number[]}
 */
var numOfBurgers = function (tomatoSlices, cheeseSlices) {
  if (tomatoSlices % 2 !== 0) {
    return [];
  }

  x = tomatoSlices / 2 - cheeseSlices;
  y = cheeseSlices - x;

  if (Math.floor(x) === x && x >= 0 && y >= 0) {
    return [x, y];
  } else {
    return [];
  }
};
// @lc code=end
