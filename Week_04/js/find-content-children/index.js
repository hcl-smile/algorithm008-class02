/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * 第一种方法
 * 解题思路：双指针
 */

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  let i = 0;
  let j = 0;
  let count = 0;

  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);

  while (i < g.length && j < s.length) {
    if (g[i] <= s[j]) {
      count++;
      i++;
      j++;
    } else {
      j++;
    }
  }

  return count;
};
// @lc code=end
