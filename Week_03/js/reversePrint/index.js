/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [05] 从尾到头打印链表
 */

// @lc code=start
/**
 * 第一种方法
 * 解题思路：遍历链表反转数组
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */

/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  let values = [];

  while (head) {
    values.push(head.value);
    head = head.next;
  }

  return values.reverse();
};

// @lc code=end
