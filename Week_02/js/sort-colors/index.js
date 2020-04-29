/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * 第一种方法
 * 解题思路：双指针双循环
 * 1.定义头尾2个指针
 * 2.当满足左条件为0时，互换位置
 * 3.当满足右条件为2时，互换位置
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      [nums[left], nums[i]] = [nums[i], nums[left]];
      left++;
    }
  }

  for (let i = right; i >= left; i--) {
    if (nums[i] === 2) {
      [nums[right], nums[i]] = [nums[i], nums[right]];
      right--;
    }
  }
};
// @lc code=end

// @lc code=start
/**
 * 第二种方法
 * 解题思路：双指针，双向夹逼
 * 1.遍历数组
 * 2.如果nums[i]=0,左指针加1，互换位置
 * 3.如果nums[i]=2,右指针减1，互换位置
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let i = 0;
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[i] === 0) {
      [nums[left], nums[i]] = [nums[i], nums[left]];

      left++;
    }

    if (nums[i] === 2) {
      [nums[right], nums[i]] = [nums[i], nums[right]];

      right--;
    }

    i++;
  }
};
// @lc code=end
