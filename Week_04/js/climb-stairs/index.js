/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * 第一种方法
 * 解题思路：双指针
 * 最新一阶梯third = first+second
 * 上一阶梯后，令first=second,second=third
 * 得出最后的结果
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 3) {
    return n;
  }

  let first = 1;
  let second = 2;
  let third = 3;

  for (let i = 2; i < n; i++) {
    third = first + second;
    first = second;
    second = third;
  }

  return third;
};
// @lc code=end

// @lc code=start
/**
 * 第二种方法
 * 解题思路：递归
 * 最新阶梯等于前两个阶梯之和
 * 存储已经处理过的值
 * 得出最后的结果
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n, map = { 1: 1, 2: 2, 3: 3 }) {
  if (!n) {
    return;
  }

  if (map[n]) {
    return map[n];
  }

  map[n] = climbStairs(n - 1, map) + climbStairs(n - 2, map);
};
// @lc code=end
