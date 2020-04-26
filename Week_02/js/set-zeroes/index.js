/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const M = matrix.length,
    N = matrix[0].length;

  let rows = new Set(),
    cols = new Set();
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (!matrix[i][j]) {
        rows.add(i);
        cols.add(j);
      }
    }
  }

  for (const r of rows) {
    for (let i = 0; i < N; i++) matrix[r][i] = 0;
  }

  for (const c of cols) {
    for (let i = 0; i < M; i++) matrix[i][c] = 0;
  }
};
// @lc code=end
