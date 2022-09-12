---
name: construct string from binary tree
difficulty: easy
topics: String, Binary trees, DFS
date: 09/06/2022
---

## Question

Given the root of a binary tree, construct a string consisting of parenthesis and integers from a binary tree with the preorder traversal way, and return it.

Omit all the empty parenthesis pairs that do not affect the one-to-one mapping relationship between the string and the original binary tree.

![example](/leetcode/treetostring.png)

## Solution

```js:tree2str.js showLineNumbers

const DFS = (node) => {
    if (!node) return null;

    let str = "" + node.val;

    if (!node.left && !node.right)
      return str;

    let leftStr = DFS(node.left);
    let rightStr = DFS(node.right);

    if (!node.left) str += "()";
    if (node.left) str += `(${leftStr})`;
    if (node.right) str += `(${rightStr})`;

    return str;
};

var tree2str = function (root) {
    return DFS(root);
};

```
