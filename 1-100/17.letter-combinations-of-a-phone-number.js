/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.



 

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
 

Constraints:

0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].
*/


/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const buttons = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"]
  }

  if (digits.length === 0) return []
  if (digits.length === 1) return buttons[digits[0]]
  
  const combine = (arr1, arr2) => {
    const newArr = []
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        newArr.push(arr1[i]+arr2[j])
      }
    }
    return newArr
  }

  let result  = [...buttons[digits[0]]]
  for (let i = 1; i < digits.length; i++) {
    result = combine(result, buttons[digits[i]])
  }
  return result
};

// console.log(letterCombinations('2587'))
// console.log(letterCombinations('2'))

/*
Runtime: 64 ms, faster than 94.53% of JavaScript online submissions for Letter Combinations of a Phone Number.
Memory Usage: 42.6 MB, less than 5.50% of JavaScript online submissions for Letter Combinations of a Phone Number.
*/