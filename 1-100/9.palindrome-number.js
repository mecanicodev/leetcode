/*
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.
 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1

*/


var isPalindrome = function(x) {

    if (x < 0) return false
    if (x < 10) return true

    const isStrPalindrome = (str) => {
      if (str.length <= 1) return false
      let isFirstEqualToLast = str[0] === str[str.length - 1]
      if (str.length <= 3) return isFirstEqualToLast
      return isFirstEqualToLast ? isStrPalindrome(str.slice(1, -1)) : false
    }
    return isStrPalindrome(x.toString())
};

console.log(isPalindrome(1000021))

/*
Runtime: 283 ms, faster than 43.79% of JavaScript online submissions for Palindrome Number.
Memory Usage: 50.7 MB, less than 8.95% of JavaScript online submissions for Palindrome Number.
*/