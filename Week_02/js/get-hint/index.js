/**
 * 第一种方法
 * 解题思路：map存储不匹配项
 * 1.创建一个map用来存储非匹配项
 * 2.假如值和索引都相等是得1A，否则推入map对象，默认为1，重复加1，拼接剩余字符串str
 * 3.遍历剩余字符串str
 * 4.假如map有，同时值大于0，则值减1
 * 5.B加1
 *
 */

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */

var getHint = function (secret, guess) {
  let str = "";
  let map = {};
  let countb = 0;
  let countc = 0;
  let count = 0;

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      countb++;
    } else {
      if (map[secret[i]]) {
        map[secret[i]] += 1;
      } else {
        map[secret[i]] = 1;
      }

      str += guess[i];
    }
  }

  while (count < str.length) {
    if (map[str[count]] && map[str[count]] > 0) {
      map[str[count]] -= 1;
      countc++;
    }

    count++;
  }

  return `${countb}A${countc}B`;
};

/* 第二种方法
 * 解题思路：map初始化数字值为0
 * 1.创建一个map用来存储0-9数字项，默认值为0
 * 2.假如值和索引都相等是得A加1，
 * 3.否则枚举map[secret[i]]，和map[guess[i]]
 * 4.map[secret[i]]加1，map[guess[i]]减1
 * 5.返回结果
 *
 */

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
function getHint(secret, guess) {
  var map = {};
  var A = 0;
  var B = 0;
  for (var i = 0; i < 10; i++) map[i] = 0;
  for (i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) A++;
    else {
      map[secret[i]]++;
      B += map[secret[i]] <= 0 ? 1 : 0;
      map[guess[i]]--;
      B += map[guess[i]] >= 0 ? 1 : 0;
    }
  }

  return A + "A" + B + "B";
}
