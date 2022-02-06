/*
Given an array, rotate the array to the right by k steps, where k is non-negative.

 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 

Constraints:

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
0 <= k <= 105
*/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  if (k >= nums.length) {
    k = k % nums.length
  }
  if (k > 0) {
    const leftItems = nums.slice(-k)
    const rightItems = nums.slice(0,-k)
    for (let i = 0; i < k; i++) {
      nums[i] = leftItems[i]
    }
    for (let j = k; j < nums.length; j++) {
      nums[j] = rightItems[j-k]
    }
  }
};

// const test = [1,2,3]
// rotate(test, 4)
// console.log(test)
//[1,2], 5 --> expected [2,1]
//[1,2,3], 4 --> expected [3,1,2]
//[1,2,3,4,5,6], 11 --> expected [2,3,4,5,6,1]


/*
Runtime: 84 ms, faster than 99.27% of JavaScript online submissions for Rotate Array.
Memory Usage: 50.9 MB, less than 33.90% of JavaScript online submissions for Rotate Array.
*/