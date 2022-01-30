/*
https://leetcode.com/problems/longest-common-prefix/

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.
*/

var longestCommonPrefix = function(strs) {
  
  const sortedStrs = strs.sort((a, b) => a.length - b.length)
  
  const baseStr = sortedStrs[0]

  let prefix = ''
  let test = ''
  for (let i = 0; i < baseStr.length; i++) {
    test = baseStr.slice(0, i + 1)
    if (sortedStrs.every(str => str.slice(0, i + 1) === test)) {
      prefix = test
    } else {
      break;
    } 
  }
  return prefix
};



//console.log(longestCommonPrefix(["dog","racecar","car"]))
//console.log(longestCommonPrefix(["flower","flow","flight"]))
//console.log(longestCommonPrefix(["reflower","flow","flight"]))


/*
Runtime: 79 ms, faster than 77.94% of JavaScript online submissions for Longest Common Prefix.
Memory Usage: 43.6 MB, less than 5.25% of JavaScript online submissions for Longest Common Prefix.
*/