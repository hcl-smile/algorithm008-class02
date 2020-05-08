/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */

// @lc code=start
/**
 * 第一种方法
 */

/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function (num) {
  let p2 = 0;
  let p3 = 0;
  let p5 = 0;

  const dp = [1];

  for (let i = 1; i < num; i++) {
    dp[i] = Math.min(dp[p2] * 2, Math.min(dp[p3] * 3, dp[p5] * 5));

    if (dp[i] === dp[p2] * 2) {
      p2++;
    }
    if (dp[i] === dp[p3] * 3) {
      p3++;
    }
    if (dp[i] === dp[p5] * 5) {
      p5++;
    }
  }

  return dp[num - 1];
};
// @lc code=end
