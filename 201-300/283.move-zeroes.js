/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 

Follow up: Could you minimize the total number of operations done?
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let i = 0, j = 0, zeroCounter = 0
  while (j < nums.length) {
    if (nums[j] !== 0) {
      nums[i] = nums[j]
      i++
      j++
    }
    while (nums[j] === 0) {
      j++
      zeroCounter++
    }
  }
  let k = 1
  while (zeroCounter > 0 && k <= zeroCounter) {
    nums[nums.length - k] = 0
    k++
  }
};


// const test = [0,1,0,3,12]
// moveZeroes(test)
// console.log(test)


/*
Runtime: 88 ms, faster than 98.34% of JavaScript online submissions for Move Zeroes.
Memory Usage: 47 MB, less than 5.81% of JavaScript online submissions for Move Zeroes.
*/




