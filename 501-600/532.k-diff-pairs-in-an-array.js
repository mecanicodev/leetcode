/*
Given an array of integers nums and an integer k, return the number of unique k-diff pairs in the array.

A k-diff pair is an integer pair (nums[i], nums[j]), where the following are true:

0 <= i < j < nums.length
|nums[i] - nums[j]| == k
Notice that |val| denotes the absolute value of val.

 

Example 1:

Input: nums = [3,1,4,1,5], k = 2
Output: 2
Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
Although we have two 1s in the input, we should only return the number of unique pairs.
Example 2:

Input: nums = [1,2,3,4,5], k = 1
Output: 4
Explanation: There are four 1-diff pairs in the array, (1, 2), (2, 3), (3, 4) and (4, 5).
Example 3:

Input: nums = [1,3,1,5,4], k = 0
Output: 1
Explanation: There is one 0-diff pair in the array, (1, 1).
*/


// |nums[i] - nums[j]| === k

// nums[i] - nums[j] === k
// nums[j] === nums[i] - k

// -(nums[i] - nums[j]) === k
// nums[j] === nums[i] + k



/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  if (nums.length <= 1) return 0
  const pairs = []
  nums.sort((a, b) => a - b)
  const set = new Set()
  const map = {}
  for (let i = 0; i < nums.length - 1; i++) {
    if (map[nums[i]]) continue
    map[nums[i]] = true
    let isPair1 = binarySearch(nums, nums[i] - k, i + 1, nums.length -1)
    let isPair2 = binarySearch(nums, nums[i] + k, i + 1, nums.length -1)
    if (isPair1) set.add(JSON.stringify([i, isPair1]))
    if (isPair2) set.add(JSON.stringify([i, isPair2]))
  }
  return set.size
};

var binarySearch = function(nums, target, start, end) {
  if (target < nums[start] || target > nums[end]) return
  let min = start, max = end
  while (min <= max) {
    let guess = Math.floor((min + max) / 2)
    if (nums[guess] === target) return guess
    if (nums[guess] < target) {
      min = guess + 1
    } else {
      max = guess - 1
    }
  }
};


// console.log(findPairs([1,2,3,4,5], 1))
// console.log(findPairs([3,1,4,1,5], 2))
// console.log(findPairs([1,3,1,5,4], 0))


/*
Runtime: 88 ms, faster than 81.33% of JavaScript online submissions for K-diff Pairs in an Array.
Memory Usage: 50.2 MB, less than 7.83% of JavaScript online submissions for K-diff Pairs in an Array.
*/