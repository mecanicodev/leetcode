/*
Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

 

Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
Example 2:

Input: nums = [0,0,0], target = 1
Output: 0

Constraints:

3 <= nums.length <= 1000
-1000 <= nums[i] <= 1000
-104 <= target <= 104
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  
  nums.sort((a,b) => a - b)

  let i = 0
  let sum, closest
  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1, k = nums.length - 1, hasLower = false
    while (j < nums.length - 1 && j < k) {
      sum = nums[i] + nums[j] + nums[k]
      closest = Math.abs(closest - target) < Math.abs(sum - target) ? closest : sum
      sum > target ? k-- : j++
    }
  }
  return closest
};


/*
Runtime: 76 ms, faster than 95.21% of JavaScript online submissions for 3Sum Closest.
Memory Usage: 42.9 MB, less than 11.69% of JavaScript online submissions for 3Sum Closest.
*/