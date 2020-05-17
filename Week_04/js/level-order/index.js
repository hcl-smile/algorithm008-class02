/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * 第一种方法
 * 解题思路：深度优先
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const res = [];

  const depth = function (node, level) {
    if (!node) {
      return null;
    }

    if (res.length === level) {
      res[level] = [];
    }

    res[level].push(node.val);

    if (node.left) {
      depth(node.left, level + 1);
    }

    if (node.right) {
      depth(node.right, level + 1);
    }
  };

  depth(root, 0);

  return res;
};
// @lc code=end
/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * 第二种方法
 * 解题思路：BFS
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const result = [];
  const queue = [root];

  while (queue) {
    const len = queue.length;
    const level = [];

    while (len) {
      const first = queue.shift();
      if (first.left) queue.push(first.left);
      if (first.right) queue.push(first.right);

      level.push(first.val);
      len--;
    }

    result.push(level);
  }

  return result;
};
// @lc code=end
