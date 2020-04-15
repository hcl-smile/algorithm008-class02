/**
 * 第一种方法
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
        nums[i] = 0;
      }
      j++;
    }
  }
};

/**
 * 第二种方法
 * 解题思路：双指针快排
 * 1.遍历数组，假如nums[i]不等于0，互换位置
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;

      j++;
    }
  }
};

/**
 * 第三种方法
 * 解题思路：从右向左遍历
 * 1.从右遍历数组，假如nums[i]等于0，则删除当前
 * 2.数组向后推入0
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
};

/**
 * 第四种方法
 * 解题思路：删除为0的项，将其重新往后推入数组
 * 1.遍历数组，假如nums[i]等于0，则删除当前，同时把当前为0的项往后推入数组
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.push(nums.splice(i, 1));
    }
  }
};
