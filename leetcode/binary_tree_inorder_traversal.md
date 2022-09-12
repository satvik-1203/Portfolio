---
name: Binary Tree Inorder Traversal,
difficulty: easy,
topics: DFS, Binary Tree,
date: 09/08/2022,
---

## Question

Given the root of a binary tree, return the inorder traversal of its nodes' values.

## Solution

```js:solution.js showLineNumbers
const DFS = (node, res) =>{
    if(!node) return;

    DFS(node.left,res);
    res.push(node.val);
    DFS(node.right, res);



}
var inorderTraversal = function(root) {

    const res = [];
    DFS(root, res);

    return res;
};
```
