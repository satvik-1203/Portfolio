---
name: Binary Tree Pruning
difficulty: Medium
topics: Tree, DFS
date: 09/05/2022
---

## Question

Given the root of a binary tree, return the same tree where every subtree (of the given tree) not containing a 1 has been removed.

A subtree of a node node is node plus every node that is a descendant of node.

<!-- ![example]() -->

## Solution

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
 * @return {TreeNode}
 */

const del = (parent, node) => {
  if (!parent) return;
  if (parent.left == node) parent.left = null;
  else parent.right = null;
};

const DFS = (parent, node) => {
  if (!node) return;

  DFS(node, node.left);
  DFS(node, node.right);

  if (!node.left && !node.right && node.val == 0) del(parent, node);
};

const traversal = (root) => {
  if (root == null) return null;
  root.left = traversal(root.left);
  root.right = traversal(root.right);
  if (root.val == 0 && root.left == null && root.right == null) return null;
  return root;
};

var pruneTree = function (root) {
  return traversal(root);
};
```
