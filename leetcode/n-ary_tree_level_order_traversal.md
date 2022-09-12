---
name: N-ary Tree Level Order Traversal
difficulty: Medium
topics: Tree, BFS
date: 09/05/2022
---

## Question

Given an n-ary tree, return the level order traversal of its nodes' values.

N ary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value.

## Solution

```js:solution.js showLineNumbers
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */

const DFS = (node, res, level) =>{
    if(node == null) return;

    if(res[level]) res[level].push(node.val);
    else res[level] = [node.val];

    node.children.forEach(child => DFS(child, res, level+1));
}

var levelOrder = function(root) {
    const res = [];

    DFS(root, res, 0);

    return res;
};
```
