/**
 * 第一种方法
 * 解题思路：双值替换
 * 1.定义双指针：first=1和second=2
 * 2.从3开始遍历
 * 3.每次替换first和second
 * 4.输出结果
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let first = 1;
  let second = 2;

  if (n <= 3) {
    return n;
  }

  for (let third = 3; third <= n; third++) {
    let res = first + second;
    first = second;
    second = res;
  }

  return second;
};

/**
 * 第二种方法
 * 解题思路：斐波拉契
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let steps = [1, 1];

  for (let i = 2; i <= n; i++) {
    steps[i] = steps[i - 1] + steps[i - 2];
  }

  return steps[n];
};

/**
 * 第三种方法
 * 解题思路：缓存递归
 * 时间复杂度: o(n)
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n, map = { 1: 1, 2: 2 }) {
  if (n < 2) {
    return 1;
  }

  if (map[n]) {
    return map[n];
  }

  map[n] = climbStairs(n - 1, map) + climbStairs(n - 2, map);

  return map[n];
};
