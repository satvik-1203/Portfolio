---
name: Numbers With Same Consecutive Differences
difficulty: Medium
topics: Backtracking, BFS
date: 09/03/2022
---

## Question

Return all non-negative integers of length n such that the absolute difference between every two consecutive digits is k.

Note that every number in the answer must not have leading zeros. For example, 01 has one leading zero and is invalid.

You may return the answer in any order.

<!-- ![example]() -->

```js:solution.js showLineNumbers
/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */

const absoluteDiff = (lastDigit, k) => {
  const res = [];

  let num1 = lastDigit + k;
  let num2 = lastDigit - k;

  if (num1 >= 0 && num1 <= 9) res.push(num1);
  if (num2 >= 0 && num2 <= 9) res.push(num2);

  return res;
};

const appendDigit = (currentNumber, n, k, res) => {
  if (currentNumber.length == n) {
    res.add(parseInt(currentNumber));
    return;
  }

  let lastDigit = parseInt(currentNumber[currentNumber.length - 1]);

  let absoluteNumbers = absoluteDiff(lastDigit, k);

  absoluteNumbers.forEach((el) => appendDigit(currentNumber + el, n, k, res));
};

var numsSameConsecDiff = function (n, k) {
  const res = new Set();

  for (let i = 1; i <= 9; i++) {
    appendDigit(`${i}`, n, k, res);
  }

  return [...res.values()];
};
```
