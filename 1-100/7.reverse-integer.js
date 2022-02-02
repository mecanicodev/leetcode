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
  reversedStr.replace(/^[0]+/, '')
  
  let reversedNumber = +reversedStr * sign

  const limit = Math.pow(2, 31)
  if (reversedNumber < -limit || reversedNumber > limit - 1) return 0
  
  return reversedNumber 
};

// console.log(reverse(120))
console.log(reverse(1534236469))



/*
Runtime: 117 ms, faster than 42.53% of JavaScript online submissions for Reverse Integer.
Memory Usage: 44.3 MB, less than 5.63% of JavaScript online submissions for Reverse Integer.

*/