---
name: Average of Levels in Binary Tree
difficulty: Easy
topics: Tree, DFS, BFS
date: 09/01/2022
---

## Question

Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10^(-5) of the actual answer will be accepted.

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
 * @return {number[]}
 */

const traversal = (node, res, level) => {
  if (!node) return;

  if (res[level]) res[level].push(node.val);
  else res[level] = [node.val];

  traversal(node.left, res, level + 1);
  traversal(node.right, res, level + 1);
};

var averageOfLevels = function (root) {
  const res = [];

  traversal(root, res, 0);

  return res.map(
    (levelArr) => levelArr.reduce((el, prev) => el + prev, 0) / levelArr.length
  );
};
```
