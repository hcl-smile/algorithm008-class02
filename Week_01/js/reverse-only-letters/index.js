/**
 * 第一种方法
 * 解题思路：双指针双向替换
 * 1.定义双指针i和j
 * 2.定义正则匹配字母
 * 3.遍历，假如都是非字母，则跳过当前
 * 4.正向位置字母和反向位置字母相互替换
 * 5.返回结果
 * 时间复杂度：O(n)
 */

/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function (S) {
  let i = 0;
  let j = S.length - 1;
  let reg = /[a-zA-Z]+/;
  S = S.split("");

  while (i < j) {
    if (!reg.test(S[i])) {
      i++;
      continue;
    }

    if (!reg.test(S[j])) {
      j--;
      continue;
    }

    let cur = S[i];
    S[i] = S[j];
    S[j] = cur;

    i++;
    j--;
  }

  return S.join("");
};
