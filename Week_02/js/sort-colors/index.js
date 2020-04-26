/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let i = 0;
  let j = 0;
  let k = nums.length - 1;

  while (i <= k) {
    if (nums[i] === 0) {
      let cur = nums[i];
      if (i !== j) {
        nums[i] = nums[j];
        nums[j] = cur;

        j++;
      }

      i++;
    }

    if (nums[i] === 2) {
      let cur = nums[i];
      if (i !== k) {
        nums[i] = nums[k];
        nums[k] = cur;
        k--;
      }

      i++;
    }
    i++;
  }
};
// @lc code=end
