/*

https://leetcode.com/problems/container-with-most-water/

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

 

Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
 

Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104

*/


var maxArea = function(height) {
  
  function Pointer(position, direction) {
    return {
      position: position,
      get value() { return height[this.position] },
      move() { this.position = this.position + direction }
    }
  }

  const i = new Pointer(0, 1)
  const j = new Pointer(height.length - 1, -1)
  
  let min
  const setMin = () => min = i.value <= j.value ? i : j 
  
  setMin()
  
  const areaBetween = (i, j) => Math.min(height[i], height[j]) * (j - i)

  let area = areaBetween(i.position, j.position)

  while (i.position < height.length - 2 && i.position < j.position) {
    min.move()
    setMin()
    area = Math.max(area, areaBetween(i.position, j.position))  
  }
  return area
};

// Test cases
//[1, 2, 1]
//[1,8,6,2,5,4,8,3,7]
// [2,3,4,5,18,17,6]
// [1,8,6,2,5,4,8,3,7]
// [10,9,8,7,6,5,4,3,2,1]

// TODO Optimize
/*
Runtime: 217 ms, faster than 6.42% of JavaScript online submissions for Container With Most Water.
Memory Usage: 51.3 MB, less than 5.18% of JavaScript online submissions for Container With Most Water.
*/
