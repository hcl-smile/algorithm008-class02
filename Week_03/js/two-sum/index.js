/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * 第一种方法
 * 解题思路：求差找值
 * 1.遍历得出差值为dis = target-nums[i]
 * 2.判断假如nums.indexOf(dis) !== -1，同时k不等i
 * 3.推入i和k
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let i = 0;
  let dis;
  let result = [];

  while (i < nums.length) {
    dis = target - nums[i];
    const k = nums.indexOf(dis);
    if (k !== -1) {
      if (i !== k) {
        result[0] = k;
        result[1] = i;
      }
    }

    i++;
  }

  return result;
};
// @lc code=end
