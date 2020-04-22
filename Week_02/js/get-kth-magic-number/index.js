/**
 * 第一种方法
 * 解题思路：丑数
 */

/**
 * @param {number} k
 * @return {number}
 */
var getKthMagicNumber = function (k) {
  let dp = [];
  let p3 = 0,
    p5 = 0,
    p7 = 0;
  dp[0] = 1;
  for (let i = 1; i < k; i++) {
    dp[i] = Math.min(dp[p3] * 3, Math.min(dp[p5] * 5, dp[p7] * 7));
    if (dp[i] == dp[p3] * 3) p3++;
    if (dp[i] == dp[p5] * 5) p5++;
    if (dp[i] == dp[p7] * 7) p7++;
  }
  return dp[k - 1];
};
