---
name: Vertical Order Traversal of a Binary Tree
difficulty: Hard
topics: Hash Table, Tree, DFS, BFS
date: 09/04/2022
---

## Question

Given the root of a binary tree, calculate the vertical order traversal of the binary tree.

For each node at position (row, col), its left and right children will be at positions (row + 1, col - 1) and (row + 1, col + 1) respectively. The root of the tree is at (0, 0).

The vertical order traversal of a binary tree is a list of top-to-bottom orderings for each column index starting from the leftmost column and ending on the rightmost column. There may be multiple nodes in the same row and same column. In such a case, sort these nodes by their values.

Return the vertical order traversal of the binary tree.

<!-- ![example]() -->

```js:solution.js showLineNumbers
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

const flat = (hashMap) =>
  [...hashMap.keys()].sort((a, b) => a - b).map((key) => hashMap.get(key));

var verticalTraversal = function (root) {
  const res = new Map();

  const visited = [];

  visited.push([`${0},${0}`, root]);

  while (visited.length) {
    const [coordinates, node] = visited.shift();

    const [row, col] = coordinates.split(",").map((el) => +el);

    const colMap = res.get(col);
    if (colMap) {
      const rowArr = colMap.get(row);

      if (rowArr) {
        rowArr.push(node.val);
        const sortedRowArr = rowArr.sort((a, b) => a - b);
        colMap.set(row, sortedRowArr);
      } else {
        colMap.set(row, [node.val]);
      }
    } else {
      const rowMap = new Map();
      rowMap.set(row, [node.val]);
      res.set(col, rowMap);
    }

    if (node.left) visited.push([`${row + 1},${col - 1}`, node.left]);
    if (node.right) visited.push([`${row + 1},${col + 1}`, node.right]);
  }
  const output = [];
  flat(res).forEach((map) => {
    const elements = [];
    [...map.values()].forEach((value) => elements.push(value));
    output.push(elements.flat());
  });

  return output;
};
```
