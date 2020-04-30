/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [05] 替换空格
 */

// @lc code=start
/**
 * 第一种方法
 * 解题思路：replace
 */

/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  s = s.replace(/\s/g, "%20");

  return s;
};

// @lc code=end

// @lc code=start
/**
 * 第二种方法
 * 解题思路：字符串charAt替换
 */

/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  let i = 0;
  let str = "";

  while (i < s.length) {
    let tmp = s.charAt(i);

    if (tmp === " ") {
      tmp = "%20";
    }

    str += tmp;
    i++;
  }

  return str;
};
// @lc code=end
