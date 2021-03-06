/*
Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

 

Example 1:

Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.
Example 2:

Input: num = 0
Output: 0
 

Constraints:

0 <= num <= 231 - 1
 

Follow up: Could you do it without any loop/recursion in O(1) runtime?
*/


/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  if (num < 9) return num
  let mod = num % 9
  return mod !== 0 ? mod : naiveAddDigits(num)
}


var naiveAddDigits = function(num) {
  while (num >= 10) {
    num = num.toString().split('')
    .map(char => +char).reduce((acc, cur) => acc + cur)
  } 
  return num
};

// console.log(addDigits(38))
// console.log(addDigits(12345))
// console.log(addDigits(18))


/*
Runtime: 68 ms, faster than 98.87% of JavaScript online submissions for Add Digits.
Memory Usage: 44 MB, less than 12.98% of JavaScript online submissions for Add Digits.
*/