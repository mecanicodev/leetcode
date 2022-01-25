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

// const checkForward = (str) => {
//   const arr = [];
//   arr.push('')
//   let pos = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (!arr[pos].includes(str[i])) {
//       arr[pos] += str[i];
//     } else {
//       arr.push(str[i]);
//       pos++;
//     }
//   }
//   return Math.max(...arr.map(itemStr => itemStr.length))
// }
var lengthOfLongestSubstring = function(s) {
  
  if (s.length <= 1) return s.length;

  const checkForward = (str) => {
    let subStr = '';
    let max = 0;
    for (let i = 0; i < str.length; i++) {
      if (!subStr.includes(str[i])) {
        subStr += str[i];
        max = Math.max(max, subStr.length)
        console.log("subStr", subStr, "max", max)
      } else {
        subStr = str[i]
      }
    }
    return max;
  }
  
  if (s.length <= 3) return checkForward(s)
  
  const checkBackward = (str) => checkForward(str.split('').reverse().join(''))
  
  const checkFromIndex = (index) => {
    let str = s.substring(index)
    return Math.max(checkForward(str), checkBackward(str))
  }

  let max = 0;
  let index = 0;
  
  do {
    max = Math.max(max, checkFromIndex(index))
    index++
  } while (max < s.substring(index).length);

  return max;

};

const printTest = (s) => {
  console.log(`Input: ${s}`)
  console.log(`Output: ${lengthOfLongestSubstring(s)}`)
}
// printTest("pwwkew")
// printTest("")
// printTest(" ")
// printTest("au")
// printTest("aab")
// printTest("dvdf")
//printTest("asjrgapa")
printTest("nfpdmpi")

/*
Falla con el siguiente input (Time Limit Exceeded):


"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ "

la dacena de arriba multiplicada por 326 +
abcdefghijklmnopqrstuvwxyzABCD


*/