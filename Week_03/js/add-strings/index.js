/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * 第一种方法
 * 解题思路：双指针
 * 1.定义2个尾部指针，i和j
 * 2.从后向前递减相加
 * 3.逢十进一
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let res = "";
  let carry = 0;
  let i = num1.length - 1;
  let j = num2.length - 1;

  while (i >= 0 || j >= 0) {
    let n1 = i >= 0 ? num1[i] : 0;
    let n2 = j >= 0 ? num2[j] : 0;

    let tmp = Number(n1) + Number(n2) + carry;
    res = (tmp % 10) + res;

    carry = Math.floor(tmp / 10);

    i--;
    j--;
  }

  if (carry == 1) {
    res = carry + res;
  }

  return res;
};
// @lc code=end

// @lc code=start
/**
 * 第二种方法
 * 解题思路：双指针
 * 同上
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let sum = "";
  let carry = 0;
  let i = num1.length - 1;
  let j = num2.length - 1;

  for (; i >= 0 || j >= 0; i--, j--) {
    let n1 = i >= 0 ? num1[i] - "0" : 0;
    let n2 = j >= 0 ? num2[j] - "0" : 0;

    let tmp = n1 + n2 + carry;
    sum = (tmp % 10) + sum;
    carry = Math.floor(tmp / 10);
  }

  return sum;
};
// @lc code=end
