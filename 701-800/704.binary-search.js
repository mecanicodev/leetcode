/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let min = 0, max = nums.length - 1
  while (min <= max) {
    let mid = Math.floor((min + max) / 2)
    if (nums[mid] === target) return mid
    if (nums[mid] < target) {
      min = mid + 1
    } else {
      max = mid - 1
    }
  }
  return - 1
};

// console.log(search([-1,0,3,5,9,12], 9)) --> 4
// console.log(search([-1,0,3,5,9,12], 2)) --> -1

/*
Runtime: 64 ms, faster than 98.63% of JavaScript online submissions for Binary Search.
Memory Usage: 45.4 MB, less than 6.71% of JavaScript online submissions for Binary Search.
*/
