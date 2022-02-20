/*
Given an array intervals where intervals[i] = [li, ri] represent the interval [li, ri), remove all intervals that are covered by another interval in the list.

The interval [a, b) is covered by the interval [c, d) if and only if c <= a and b <= d.

Return the number of remaining intervals.

 

Example 1:

Input: intervals = [[1,4],[3,6],[2,8]]
Output: 2
Explanation: Interval [3,6] is covered by [2,8], therefore it is removed.
Example 2:

Input: intervals = [[1,4],[2,3]]
Output: 1
 

Constraints:

1 <= intervals.length <= 1000
intervals[i].length == 2
0 <= li <= ri <= 105
All the given intervals are unique.
*/

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
  const l = intervals.length
  const isCovered = ([a, b], [c, d]) => c <= a && b <= d
  
  let i = 0, covered = 0
  while (i < l) {
    for (let j = 0; j < l; j++) {
      if (i === j) continue 
      if (isCovered(intervals[i], intervals[j])) {
        covered++
        break
      }
    }
    i++ 
  }
  return intervals.length - covered
};


// console.log(removeCoveredIntervals([[1,4],[3,6],[2,8]]))
// console.log(removeCoveredIntervals([[1,4],[2,3]]))



/*
Runtime: 68 ms, faster than 100.00% of JavaScript online submissions for Remove Covered Intervals.
Memory Usage: 44.5 MB, less than 13.16% of JavaScript online submissions for Remove Covered Intervals.
*/