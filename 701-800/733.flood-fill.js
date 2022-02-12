/*
An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and newColor. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with newColor.

Return the modified image after performing the flood fill.

 

Example 1:


Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.
Example 2:

Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, newColor = 2
Output: [[2,2,2],[2,2,2]]
 

Constraints:

m == image.length
n == image[i].length
1 <= m, n <= 50
0 <= image[i][j], newColor < 216
0 <= sr < m
0 <= sc < n
*/

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  const baseColor = image[sr][sc]
  console.log(`baseColor: ${baseColor}`)
  const visited = {}
  const deepFloodFill = (i, j) => {
    visited[`${i}${j}`] = true
    image[i][j] = newColor
    const left = [i - 1, j], right = [i + 1, j]
    const up = [i, j - 1], down = [i, j + 1]
    const directions = [left, right, up, down]
    directions.forEach(([i, j]) => {
      if (image[i] === undefined || image[i][j] === undefined || visited[`${i}${j}`]) return
      if (image[i][j] === baseColor) deepFloodFill(i, j)
    })
  }
  deepFloodFill(sr, sc)
  return image
};


// console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2))
// console.log(floodFill([[0,0,0],[0,0,0]], 0, 0, 2))


/*
Runtime: 84 ms, faster than 89.10% of JavaScript online submissions for Flood Fill.
Memory Usage: 45.1 MB, less than 5.60% of JavaScript online submissions for Flood Fill.
*/