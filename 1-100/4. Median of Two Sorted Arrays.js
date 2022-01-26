/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
*/


var findMedianSortedArrays = function(nums1, nums2) {
  
  const merged = [...nums1, ...nums2];
  const sorted = merged.sort((a, b) => a - b)
  const isOdd = sorted.length % 2 !== 0; 

  let index;
  if (isOdd) {
    index = ((sorted.length + 1) / 2 - 1);
    return sorted[index]
  } else {
    index = sorted.length / 2;
    return (sorted[index] + sorted[index - 1]) / 2
  }

};


/*

Runtime: 116 ms, faster than 92.51% of JavaScript online submissions for Median of Two Sorted Arrays.
Memory Usage: 45 MB, less than 47.29% of JavaScript online submissions for Median of Two Sorted Arrays.

*/