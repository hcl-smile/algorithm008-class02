/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * 第一种方法
 * 解题思路：js的Math.sqrt函数
 */

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  return Math.sqrt(x);
};
// @lc code=end

// @lc code=start
/**
 * 第二种方法
 * 解题思路：js的Math.sqrt函数
 */

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let l = 1;
  let r = x;

  if (x < 2) {
    return x;
  }

  while (l < r) {
    const mid = Math.floor((l + r) / 2);

    if (x / mid === mid) {
      return mid;
    } else if (x / mid > mid) {
      l++;
    } else {
      r = mid;
    }
  }

  return l - 1;
};
// @lc code=end
