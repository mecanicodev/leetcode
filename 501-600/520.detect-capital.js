/*
520. Detect Capital
https://leetcode.com/problems/detect-capital/

We define the usage of capitals in a word to be right when one of the following cases holds:

- All letters in this word are capitals, like "USA".
- All letters in this word are not capitals, like "leetcode".
- Only the first letter in this word is capital, like "Google".

Given a string word, return true if the usage of capitals in it is right.
*/

var detectCapitalUse = function(word) {
    
  const isLowerCase = (char) => {
      let unicode = char.charCodeAt(0);
      return (unicode >= 97 && unicode <= 122) ? true : false;
  }
  
  const isUpperCase = (char) => {
      let unicode = char.charCodeAt(0);
      return (unicode >= 65 && unicode <= 90) ? true : false;
  }
  
  const first = word.charAt(0);
  const rest = word.substring(1).split('');
  
  if (isUpperCase(first)) {
    if (rest.every(char => isUpperCase(char))) return true
    if (rest.every(char => isLowerCase(char))) return true
    return false;
  }
  
  if (isLowerCase(first)) {
      return rest.every(char => isLowerCase(char))
  }
};

const printTest = (...words) => words.forEach(word => console.log(word, detectCapitalUse(word)))



printTest("USA", "leetcode", "Google", "WronG", "eRROR")
