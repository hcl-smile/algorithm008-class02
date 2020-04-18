/**
 * 第一种方法
 */

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let count = 0;
  let sign = 0;

  for (let i = 0; i < s.length; i++) {
    sign = s[i] === "L" ? sign + 1 : sign - 1;
    if (sign === 0) {
      count++;
    }
  }

  return count;
};
