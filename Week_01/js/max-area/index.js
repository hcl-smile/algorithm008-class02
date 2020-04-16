/*
 * [11] 盛最多水的容器
 */

/**
 * 第一种方法
 * 解题思路：双向夹逼方法
 * 1.创建2个指针i和j，将数组分为左右2边
 * 2.i得初始值为0，j得初始值为数组length - 1
 * 3.当左边值小时，i加1
 * 4.当右边值小时，j减1
 * 5.最后对比出最大值
 * 时间复杂度：0(n)
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  let i = 0;
  let j = height.length - 1;

  while (i < j) {
    let min = Math.min(height[i], height[j]);
    let areas = min * (j - i);

    max = Math.max(max, areas);

    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }

  return max;
};

/**
 * 第二种方法
 * 解题思路：两层嵌套循环
 * 1.遍历每对组合
 * 2.对比出每个组合得最大值
 * 3.输出最大值
 * 时间复杂度：0(n^2)
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  let len = height.length;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      let min = Math.min(height[i], height[j]);
      max = Math.max(max, min * (j - i));
    }
  }

  return max;
};
