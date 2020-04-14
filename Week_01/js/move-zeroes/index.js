/**
 * 解题思路：双指针
 * 1.创建一个新指针j
 * 2.遍历数组索引i，当nums[i]项不等于0，则替换nums[j] = nums[i]，同时j++
 * 3.遍历索引j后的数组项，全部替换为0
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (i !== j) {
        nums[j] = nums[i];
      }
      j++;
    }
  }

  while (j < nums.length) {
    nums[j] = 0;
    j++;
  }
};
