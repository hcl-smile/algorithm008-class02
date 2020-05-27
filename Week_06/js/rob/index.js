/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * 第一种方法
 */

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

// @lc code=start
/**
 * 第二种方法
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = function (nums) {
  let memo = [];

  let recur = function (i) {
    if (i >= nums.length) {
      return 0;
    }

    if (memo[i] !== null) {
      return memo[i];
    }

    memo[i] = Math.max(recur(i + 2) + nums[i], recur(i + 1));
    return memo[i];
  };

  return recur(0);
};
// @lc code=end

// @lc code=start
/**
 * 第三种方法
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = function (nums) {
  let memo = [];

  memo[0] = 0;
  memo[1] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    memo[i + 1] = Math.max(memo[i], memo[i - 1] + nums[i]);
  }

  return memo[nums.length];
};
// @lc code=end
