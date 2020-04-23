/*
 * @lc app=leetcode.cn id=1021 lang=javascript
 *
 * [1021] 删除最外层的括号
 */

// @lc code=start
/**
 * 第一种方法
 * 解题思路：栈方法
 */

/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
  let count = 0;
  let stack = [];

  for (let i = 0; i < S.length; i++) {
    if (S[i] === "(") {
      count++;

      if (count >= 2) {
        stack.push(S[i]);
      }
    }

    if (S[i] === ")") {
      count--;

      if (count >= 1) {
        stack.push(S[i]);
      }
    }
  }

  return stack.join("");
};
// @lc code=end

// @lc code=start
/**
 * 第二种方法
 * 解题思路：栈方法
 */

/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
  let L = 1;
  let R = 0;
  let stack = [];

  for (let i = 0; i < S.length; i++) {
    if (S[i] === "(") {
      L++;
    } else {
      R++;
    }

    if (L !== R) {
      stack.push(S[i]);
    }
  }

  return stack.join("");
};
// @lc code=end

// @lc code=start
/**
 * 第三种方法
 * 解题思路：栈方法
 */

/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
  let opened = 0;
  let stack = [];

  for (let i in S) {
    if (S[i] === "(" && opened++ > 0) {
      stack.push(S[i]);
    }

    if (S[i] === ")" && opened-- > 0) {
      stack.push(S[i]);
    }
  }

  return stack.join("");
};
// @lc code=end
