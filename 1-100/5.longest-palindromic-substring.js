/*
https://leetcode.com/problems/longest-palindromic-substring/

Given a string s, return the longest palindromic substring in s.

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.
*/


var longestPalindrome = function(s) {

  const isPalindrome = (s) => {
    if (s.length == 1) return true
    if (s.length <= 3) return s[0] === s[s.length - 1] 
    return s[0] === s[s.length - 1] ? isPalindrome(s.slice(1, -1)) : false
  }

  const maxSubstr = (s1, s2) => s1.length >= s.length ? s1 : s2
  let longest = ''
  let subStr = ''

  for (let i = 0; i < s.length; i++) {
    if (longest.length >= s.length - i) break
    for (let j = s.length; j > i;  j--) {
      if (longest.length >= j - i) break
      subStr = s.slice(i, j)
      if (isPalindrome(subStr)) {
        longest = maxSubstr(longest, subStr)
        break
      }
    }
  }
  return longest
}

console.log(longestPalindrome("babad"))

/*
Runtime: 2589 ms, faster than 10.45% of JavaScript online submissions for Longest Palindromic Substring.
Memory Usage: 48.6 MB, less than 13.36% of JavaScript online submissions for Longest Palindromic Substring.
*/