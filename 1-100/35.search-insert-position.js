/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (target < nums[0]) return 0
  if (target > nums[nums.length - 1]) return nums.length

  let min = 0, max = nums.length - 1
  while (min <= max) {
    let mid = Math.floor((min + max) / 2)
    if (nums[mid] === target) return mid
    if (nums[mid] < target) {
      min = mid + 1
    } else {
      max = mid - 1
    }

    if (min > max) {
      return nums[mid] < target ? mid + 1 : mid
    }
  }
};

// console.log(searchInsert([1,3,5,6], 5)) //2
// console.log(searchInsert([1,3,5,6], 2)) //1
// console.log(searchInsert([1,3,5,6], 7)) // 4
// console.log(searchInsert([1,3], 2)) // 1
// console.log(searchInsert([1,3,5,6], 0)) // 0
// console.log(searchInsert([3,5,7,9,10], 8)) // 3


/*
Runtime: 61 ms, faster than 96.09% of JavaScript online submissions for Search Insert Position.
Memory Usage: 41.9 MB, less than 15.09% of JavaScript online submissions for Search Insert Position.
*/

