/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let i = 0;
  let j = 0;
  let res = [];
  let n = matrix.length - 1;

  if (n < 1) {
    return [];
  }

  let m = matrix[0].length - 1;
  let turn = m === 0 ? "d" : "r";

  let boundl = 0;
  let boundr = m;
  let boundd = n;
  let boundu = 0;

  for (let a = 0; a < (m + 1) * (n + 1); a++) {
    res.push(matrix[i][j]);

    if (turn === "r") {
      j++;
      if (j === boundr) {
        turn = "d";
        boundu++;
      }
    } else if (turn === "d") {
      i++;
      if (i === boundd) {
        turn = "l";
        boundr--;
      }
    } else if (turn === "l") {
      j--;
      if (i === boundl) {
        turn = "u";
        boundd--;
      }
    } else if (turn === "u") {
      i--;
      if (i === boundu) {
        turn = "l";
        boundl++;
      }
    }
  }

  return res;
};
// @lc code=end
