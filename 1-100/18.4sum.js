/*
Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

0 <= a, b, c, d < n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order.

 

Example 1:

Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
Example 2:

Input: nums = [2,2,2,2,2], target = 8
Output: [[2,2,2,2]]
 

Constraints:

1 <= nums.length <= 200
-109 <= nums[i] <= 109
-109 <= target <= 109
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  if (nums.length < 4) return []

  nums.sort((a,b) => a - b)
  const set = new Set()
  const results = []
  const map = {}
  for (let i = 0; i < nums.length - 3; i++) {
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break
    if (map[nums[i]]) continue
    map[nums[i]] = true
    let j = i + 1
    while (j < nums.length - 2) {
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break
      let diff = target - nums[i] - nums[j]
      let occurrences = twoSum(nums, j + 1, nums.length - 1, diff)
      if (occurrences.length > 0) {
        occurrences.forEach(([k, m]) => {
          set.add(JSON.stringify([nums[i], nums[j], nums[k], nums[m]]))
        })
      }
      j++
    }
  }
  set.forEach(item => results.push(JSON.parse(item)))
  return results
};

function twoSum(nums, start, end, target) {
  const occurrences = []
  const map = {}
  for (let i = start; i <= end; i++) {
    if (nums[i] + nums[i + 1] > target) return occurrences
    if (map[nums[i]]) continue
    let min = i + 1, max = end
    while (min <= max) {
      let mid = Math.floor((min + max) / 2)
      let diff = target - nums[i] 
      if (nums[mid] === diff) {
        occurrences.push([i, mid])
        map[nums[i]] = true
        break
      }
      if (nums[mid] < diff) {
        min = mid + 1
      } else {
        max = mid - 1
      }
    }  
  }
  return occurrences
}


//  console.log(fourSum([1,0,-1,0,-2,2], 0))
// console.log(fourSum([2,2,2,2,2], 8))

/*
Runtime: 332 ms, faster than 22.44% of JavaScript online submissions for 4Sum.
Memory Usage: 50.3 MB, less than 5.56% of JavaScript online submissions for 4Sum.

*/