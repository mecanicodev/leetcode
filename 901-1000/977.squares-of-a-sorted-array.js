/*
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  const squares = []

  let j
  for (let i = 0; i < nums.length; i++) {

    if (nums[i] < 0) {
      j = i // j --> index of the last negative number founded
    } else {
        while (j >= 0 && Math.abs(nums[j]) <= nums[i]) {
          squares.push(nums[j] ** 2)
          j--
        }
        squares.push(nums[i] ** 2)
    }
    // Insert all squares for negatives values
    // that its absolute value is greater than the last item
    if (i === nums.length - 1) {
      while (j >= 0) {
        squares.push(nums[j] ** 2)
        j--
      }
    }
  }
  return squares
};

// console.log(sortedSquares([-4,-1,0,3,10]))
// console.log(sortedSquares([-7,-3,2,3,11]))
// console.log(sortedSquares([-7,-3,0,2,3,11]))
// console.log(sortedSquares([-7,-3,-1,0,1,2,3]))
// console.log(sortedSquares([0,1,2,3]))
//console.log(sortedSquares([-1]))


/*
Runtime: 96 ms, faster than 99.05% of JavaScript online submissions for Squares of a Sorted Array.
Memory Usage: 49.4 MB, less than 5.33% of JavaScript online submissions for Squares of a Sorted Array.
*/
