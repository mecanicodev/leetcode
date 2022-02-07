/*
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

 

Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
Example 2:

Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
Example 3:

Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
 

Constraints:

2 <= numbers.length <= 3 * 104
-1000 <= numbers[i] <= 1000
numbers is sorted in non-decreasing order.
-1000 <= target <= 1000
The tests are generated such that there is exactly one solution.
*/


// [-5,-1,-2,-2,-2,-2,-2,0,1,2,2,2,2,2,3,4] --> 0

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let i = 0, j = -1, jmin = i + 1, l = numbers.length
  while (jmin < l) {
    j = indexOfFirstOccurrence(numbers, jmin, l - 1, target - numbers[i])
    if (j !== -1) return [i + 1, j + 1]
    i++
    jmin = i + 1
  }
  return []
};

// binary search
function indexOfFirstOccurrence(arr, min, max, target) {
  if (target < arr[min] || target > arr[max]) return -1
  let result = -1
  while (min <= max) {
    let mid = Math.floor((min + max) / 2)
    if (arr[mid] === target) {
      result = mid
      if (arr[mid - 1] === target) {
        max = mid - 1
      } else break
    }
    if (arr[mid] < target) {
      min = mid + 1
    } else {
      max = mid - 1
    }
  }
  return result
}

//console.log(twoSum([2,7,11,15], 9))


/*
Runtime: 80 ms, faster than 66.92% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.
Memory Usage: 43.2 MB, less than 5.34% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.
*/