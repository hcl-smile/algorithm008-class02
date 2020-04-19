/**
 * 第一种方法
 * 解题思路：用对象存储
 * 1.创建一个map
 * 2.遍历字符串
 * 3.判断当前字符串是否在map内，是则加1，否则等于1
 * 4.返回结果
 */

/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  if (!s) {
    return " ";
  }

  const map = {};

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]] += 1;
    } else {
      map[s[i]] = 1;
    }
  }

  return Object.keys(map).filter((s) => map[s] === 1)[0]
    ? Object.keys(map).filter((s) => map[s] === 1)[0]
    : " ";
};

/**
 * 第二种方法
 * 解题思路：indexOf和lastOf
 * 1.遍历字符串
 * 2.假如从左到右的索引等于从右到左的索引，则返回结果
 * 3.返回空格字符串
 */

/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  let result = " ";

  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      result = s[i];
      return result;
    }
  }

  return result;
};
