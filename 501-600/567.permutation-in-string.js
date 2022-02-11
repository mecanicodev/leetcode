/*
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

 

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false
 

Constraints:

1 <= s1.length, s2.length <= 104
s1 and s2 consist of lowercase English letters.
*/


/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  if (s1.length > s2.length) return false

  const mapChars = (str) => {
    const map = {}
    for (let i = 0; i < str.length; i++) {
      map[str[i]] = map[str[i]] ? map[str[i]] + 1 : 1      
    }
    return map
  }

  const target = mapChars(s1)

  const hasSameChars = (map1, map2) => {
    if (Object.keys(map1).length !== Object.keys(map2).length) return false
    for (const key in map1) {
      if (map1[key] !== map2[key]) return false
    }
    return true
  }

  const testMap = mapChars(s2.slice(0, s1.length))
  if (hasSameChars(testMap, target)) return true

  for (let i = s1.length; i < s2.length; i++) {
    let j = i - s1.length
    // sliding window
    testMap[s2[i]] = testMap[s2[i]] ? testMap[s2[i]] + 1 : 1
    testMap[s2[j]] > 1 ? testMap[s2[j]]-- : delete testMap[s2[j]]
    if (hasSameChars(testMap, target)) return true
  }
  
  return false
};


/*
Runtime: 148 ms, faster than 57.83% of JavaScript online submissions for Permutation in String.
Memory Usage: 50.6 MB, less than 9.81% of JavaScript online submissions for Permutation in String.
*/

