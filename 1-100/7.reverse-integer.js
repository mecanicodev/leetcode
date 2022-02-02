/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
 

Constraints:

-231 <= x <= 231 - 1
*/


var reverse = function(x) {
  
  if (x > -10 && x < 10) return x

  const sign = x < 0 ? -1 : 1
  x = Math.abs(x)
  let reversedStr = x.toString().split('').reverse().join('')
  
  let reversedNumber = +reversedStr.replace(/^[0]+/, '') * sign

  const limit = Math.pow(2, 31)
  if (reversedNumber < -limit || reversedNumber > limit - 1) return 0
  
  return reversedNumber 
};

console.log(reverse(120))
//console.log(reverse(1534236469))



/*

Runtime: 81 ms, faster than 90.32% of JavaScript online submissions for Reverse Integer.
Memory Usage: 44 MB, less than 7.66% of JavaScript online submissions for Reverse Integer.

*/