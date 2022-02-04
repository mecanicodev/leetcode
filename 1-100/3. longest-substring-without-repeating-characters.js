/*

https://leetcode.com/problems/longest-substring-without-repeating-characters/

Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/



var lengthOfLongestSubstring = function(s) {
  if (s.length <= 1) return s.length
  const map = new Map()
  let i = 0, j = 0, subStr = '', maxSubstr = ''
  while (i < s.length - maxSubstr.length) {
    if (!map.has(s[j]) && s[j] !== undefined) {
      map.set(s[j], 1)
      subStr += s[j]
      j++
    } else {
      maxSubstr = subStr.length > maxSubstr.length ? subStr : maxSubstr
      i++
      j = i
      subStr = ''
      map.clear()
    }
  }
  return maxSubstr.length
}


/*
Runtime: 453 ms, faster than 18.41% of JavaScript online submissions for Longest Substring Without Repeating Characters.
Memory Usage: 49.5 MB, less than 11.06% of JavaScript online submissions for Longest Substring Without Repeating Characters.
*/