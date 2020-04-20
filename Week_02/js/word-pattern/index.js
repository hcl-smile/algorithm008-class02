/**
 * 第一种方法
 * 解题思路:indexOf
 * 1.判断索引值是否都相等
 * 2.如果不相等则返回false
 * 3.返回true
 */

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  let patterns = pattern.split("");
  let strs = str.split(" ");

  if (patterns.length !== strs.length) {
    return false;
  }

  for (let i = 0; i < strs.length; i++) {
    if (patterns.indexOf(patterns[i]) !== strs.indexOf(strs[i])) {
      return false;
    }
  }

  return true;
};

/**
 * 第二种方法
 * 解题思路: set和hash
 * 1.遍历pattern
 * 2.假如不存在hash[pattern[i]]同时不在set上，则推入hash和set
 * 3.否则当hash[pattern[i]]不等于str[i]时，返回false
 * 4.返回true
 */

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  let words = str.split(" ");

  if (words.length !== pattern.length) return false;

  const mapped = new Set();
  const hash = {};

  for (let i = 0; i < pattern.length; i++) {
    const currPattern = pattern[i];
    const currWord = words[i];

    if (!hash[currPattern] && !mapped.has(currWord)) {
      hash[currPattern] = currWord;
      mapped.add(currWord);
    } else if (hash[currPattern] !== currWord) {
      return false;
    }
  }
  return true;
};
