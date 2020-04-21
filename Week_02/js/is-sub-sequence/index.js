/**
 * 第一种方法
 * 解题思路：贪心算法
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let sStack = s.split("");
  let tStack = t.split("");

  if (s.length === 0) {
    return true;
  }

  while (tStack.length > 0) {
    let temp = tStack.pop();
    if (temp === sStack[sStack.length - 1]) {
      sStack.pop();
    }

    if (sStack.length === 0) {
      return true;
    }
  }
};

/**
 * 第二种方法
 * 解题思路：双指针
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let i = 0;
  let j = 0;
  let tLen = t.length;
  let sLen = s.length;

  if (s.length === 0) {
    return true;
  }

  while (i < tLen) {
    if (t[i] === s[j]) {
      j++;
    }

    if (j === sLen) {
      return true;
    }

    i++;
  }

  return false;
};

/**
 * 第二种方法
 * 解题思路：贪心算法
 * 局部最优解
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (!s) {
    return true;
  }

  for (let i = 0; i < s.length; i++) {
    let temp = t.indexOf(s[i]);
    if (temp > -1) {
      t = t.substr(temp + 1);
    } else {
      return false;
    }
  }

  return true;
};
