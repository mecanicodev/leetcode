/*
https://leetcode.com/problems/3sum/

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []
 

Constraints:

0 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/


var threeSum = function(nums) {

  if (nums. length < 3) return []

  nums.sort((a,b) => a - b)

  const set = new Set()
  const results = []

  let i = 0;
  while (i < nums.length - 2 && nums[i] <= 0) {

    let j = i + 1
    let k = nums.length - 1
    const mapJ = {}

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k]
      if (sum > 0) k--
      if (sum < 0) {
        j++
        while (mapJ[nums[j]]) j++
      }
      if (sum === 0) {
        set.add(JSON.stringify([nums[i], nums[j], nums[k]]))
        mapJ[nums[j]] = true;
        j = i + 1
        while (mapJ[nums[j]]) j++
        k = nums.length - 1
      }
    }
    i++
  }
  set.forEach(arr => results.push(JSON.parse(arr)))
  return results
}





// console.log(threeSum([-1,0,1,2,-1,-4]))
// console.log(threeSum([-4,-1,-1,0,1,2]))
// console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]))
// console.log(threeSum([0,3,0,1,1,-1,-5,-5,3,-3,-3,0]))
// console.log(threeSum([-2,0,1,1,2]))
// console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]))
// const arrOfZeros = new Array(3000).fill(0)
// console.log(threeSum(arrOfZeros))
// console.time("threeSum")
// console.log(threeSum([34,55,79,28,46,33,2,48,31,-3,84,71,52,-3,93,15,21,-43,57,-6,86,56,94,74,83,-14,28,-66,46,-49,62,-11,43,65,77,12,47,61,26,1,13,29,55,-82,76,26,15,-29,36,-29,10,-70,69,17,49]))
// console.timeEnd("threeSum")




/*
Runtime: 2876 ms, faster than 10.42% of JavaScript online submissions for 3Sum.
Memory Usage: 71.7 MB, less than 5.43% of JavaScript online submissions for 3Sum.
*/