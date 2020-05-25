/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var max = function (a, b) {
  return a > b ? a : b;
};

var rob = function (nums) {
  let a = 0;
  let b = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      a = max(a + nums[i], b);
    } else {
      a = max(a, b + nums[i]);
    }
  }

  return max(a, b);
};
// @lc code=end
