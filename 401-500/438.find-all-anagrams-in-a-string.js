/*

https://leetcode.com/problems/find-all-anagrams-in-a-string/

Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
 

Constraints:

1 <= s.length, p.length <= 3 * 104
s and p consist of lowercase English letters.
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  if (p.length > s.length || p.length === 0 || s.length === 0) return []

  const mapChars = (str) => {
    const map = new Map()
    for (let i = 0; i < str.length; i++) {
      if (map.has(str[i])) {
        map.set(str[i], map.get(str[i]) + 1)
      } else {
        map.set(str[i], 1)
      }
    }
    return map
  }
  
  pMap = mapChars(p)
  
  const isEqualToPmap = (subStrMap) => {
    if (subStrMap.size !== pMap.size) return false
    for (let key of pMap.keys()) {
      if (subStrMap.get(key) !== pMap.get(key)) return false
    }
    return true
  }
  
  const size = p.length
  let indices = []
  let subStrMap = mapChars(s.slice(0, size))
  if (isEqualToPmap(subStrMap)) indices.push(0)

  // Window sliding
  // Update map, substract -> s[i - 1], add -> s[i + size - 1]
  for (let i = 1; i < s.length - size + 1 ; i++) {
    let prev = s[i - 1], curr = s[i + size - 1]

    if (subStrMap.get(prev) > 1) {
      subStrMap.set(prev, subStrMap.get(prev) - 1)
    } else {
      subStrMap.delete(prev)
    }

    if (subStrMap.has(curr)) {
      subStrMap.set(curr, subStrMap.get(curr) + 1)
    } else {
      subStrMap.set(curr, 1)
    }

    if (isEqualToPmap(subStrMap)) indices.push(i)
  }
  return indices
};

//console.log(findAnagramsUsingMap("cbaebabacd", "abc"))


/*
Runtime: 194 ms, faster than 44.63% of JavaScript online submissions for Find All Anagrams in a String.
Memory Usage: 48.7 MB, less than 22.36% of JavaScript online submissions for Find All Anagrams in a String.
*/