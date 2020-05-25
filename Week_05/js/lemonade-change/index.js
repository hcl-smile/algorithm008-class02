/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * 第一种方法
 * 解题思路
 * if(money === 5)，five++
 * if(money === 10)，five--,ten++
 * if(money === 20)，ten--;five--; or five -= 3
 */

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let ten = 0;
  let five = 0;

  for (let i = 0; i < bills.length; i++) {
    const cur = bills[i];

    if (cur === 5) five++;
    else if (cur === 10) ten++, five--;
    else if (ten > 0) ten--, five--;
    else five -= 3;

    if (five < 0) return false;
  }

  return true;
};
// @lc code=end
