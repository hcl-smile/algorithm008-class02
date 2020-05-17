/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
 */

// @lc code=start

/**
 * 第一种方法
 * 解题思路：广度优先
 */

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  const queue = [root];

  while (queue.length) {
    const n = queue.shift();

    if (n !== null) {
      [n.left, n.right] = [n.right, n.left];

      queue.push(n.left, n.right);
    }
  }

  return root;
};
// @lc code=end

// @lc code=start
/**
 * 第二种方法
 * 解题思路：递归
 */

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root !== null) {
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  }

  return root;
};
// @lc code=end

// @lc code=start
/**
 * 第三种方法
 * 解题思路：深度优先
 */

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  const stack = [];
  while (stack.length) {
    const n = stack.pop();
    if (n !== null) {
      [n.left, n.right] = [n.right, n.left];

      stack.push(n.left, n.right);
    }
  }

  return root;
};
// @lc code=end
