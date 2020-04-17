/**
 * 第一种方法
 * 解题思路：Array.from
 * 1.Array.from转换数组的项为乘积
 * 2.数组进行快排
 * 3.返回数组
 */

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  return Array.from(A, (num) => {
    return num * num;
  }).sort((a, b) => {
    return a - b;
  });
};

/**
 * 第二种方法
 * 解题思路：reduce
 * 1.reduce转换数组的项为乘积
 * 2.数组进行快排
 * 3.返回数组
 */

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  return A.reduce((pre, cur) => {
    pre.push(cur * cur);
    return pre;
  }, []).sort((a, b) => {
    return a - b;
  });
};

/**
 * 第三种方法
 * 解题思路：遍历数组
 * 1.遍历数组转换数组的项为乘积
 * 2.数组进行快排
 * 3.返回数组
 */

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  let i = 0;
  while (i < A.length) {
    A[i] *= A[i];
    i++;
  }

  return A.sort((a, b) => {
    return a - b;
  });
};

/**
 * 第四种方法
 * 解题思路：双指针夹逼
 * 1.从后遍历数组
 * 2.当左边大于右边则，存储当前索引值等于左边值，左边索引加1，反之存储当前索引值等于右边值，右边索引减1
 * 3.返回数组
 */

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  let i = 0;
  let arr = [];
  let j = A.length - 1;
  let z = A.length - 1;

  while (z >= 0) {
    let l = A[i] * A[i];
    let r = A[j] * A[j];
    if (l > r) {
      arr[z] = l;
      i++;
    } else {
      arr[z] = r;
      j--;
    }

    z--;
  }

  return arr;
};
