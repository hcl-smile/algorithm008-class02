/**
 * 第一种解法
 * 解题思路：遍历存储乘积和和数
 * 1.判断边界条件
 * 2.将数字转换为字符串数组
 * 3.遍历
 * 4.存储乘积和和
 * 5.返回两值之差
 * 时间复杂度：o(n)
 */

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  let product = 1;
  let sum = 0;
  let target = n < 0 ? 1 : n >= Math.pow(10, 5) ? Math.pow(10, 5) : n;

  target = target > Math.pow(2, 32) ? Math.pow(2, 32) : target;
  let str = target.toString().split("");

  for (let i = 0; i < str.length; i++) {
    product *= parseInt(str[i]);
    sum += parseInt(str[i]);
  }

  return product - sum;
};

/**
 * 第二种解法
 * 解题思路：取余去尾
 * 1.将数字以10取余，得到末尾数
 * 2.拿到末尾数参与加乘
 * 3.再将数字除以10，向下取整，去掉一位
 * 4.返回乘积和加法结果得差值
 * 时间复杂度：o(logn)
 */

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  let x = 1;
  let y = 0;

  while (n != 0) {
    let z = n % 10;
    x *= z;
    y += z;

    n = Math.floor(n / 10);
  }

  return x - y;
};

/**
 * 第三种方法
 * 解题思路：reduce得出乘积和加
 * 1.数字转换为数组
 * 2.reduce分别得出乘和加
 * 3.返回差值
 * 时间复杂度：o(n)
 */

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  var digits = Array.from(String(n), Number);
  var product = digits.reduce((a, b) => a * b);
  var sum = digits.reduce((a, b) => a + b);

  return product - sum;
};
