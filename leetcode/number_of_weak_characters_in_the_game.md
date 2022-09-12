---
name: Number of weak characters in the game,
difficulty: medium,
date: 09/09/2022,
topics: Array, Greedy, Sorting
---

## Question

You are playing a game that contains multiple characters, and each of the characters has two main properties: attack and defense. You are given a 2D integer array properties where properties[i] = [attacki, defensei] represents the properties of the ith character in the game.

A character is said to be weak if any other character has both attack and defense levels strictly greater than this character's attack and defense levels. More formally, a character i is said to be weak if there exists another character j where `attackj > attacki` and `defensej > defensei`.

Return the number of weak characters.

## Solution

```js:solution.js showLineNumbers
/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function(properties) {
    properties = properties.sort((a,b)=>   b[0] - a[0]  || a[1] -  b[1]);
    let currentMax = 0;
    let res = 0;

    console.log(properties)

    properties.forEach(property => {
        const [attack , def] = property;

        if(def < currentMax ) res++;
        currentMax = Math.max(def, currentMax);
    })

    return res;
};
```
