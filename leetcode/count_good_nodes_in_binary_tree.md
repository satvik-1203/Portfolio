---
name: Count Good Nodes in Binary Tree
difficulty: Medium
topics: Tree, DFS, BFS
date: 09/02/2022
---

## Question

Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

Return the number of good nodes in the binary tree.

![example]()

```js
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
 * @return {number}
 */

/*



*/

const traversal = (node, lastGoodNode, res) => {
  if (!node) return;

  if (node.val >= lastGoodNode) {
    res[0]++;
    lastGoodNode = node.val;
  }

  traversal(node.left, lastGoodNode, res);
  traversal(node.right, lastGoodNode, res);
};

var goodNodes = function (root) {
  const res = [1];
  lastGoodNode = root.val;

  traversal(root.left, lastGoodNode, res);
  traversal(root.right, lastGoodNode, res);

  return res[0];
};
```
