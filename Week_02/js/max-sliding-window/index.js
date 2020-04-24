/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let arr = [];
  if (!nums.length) {
    return [];
  }

  for (let i = 0; i <= nums.length - k; i++) {
    const curNums = nums.slice(i, k + i);
    const maxNums = Math.max.apply(null, curNums);
    arr.push(maxNums);
  }

  return arr;
};
// @lc code=end
