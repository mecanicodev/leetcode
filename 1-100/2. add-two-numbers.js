/*
2. Add Two Numbers (Medium)

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
const listNodeFromArray = (arr) => {
  const ln = new ListNode()
  let curr = ln;
  for (let i = 0; i < arr.length - 1; i++) {
    curr.val = arr[i];
    curr.next = { val: arr[i + 1], next: null };
    curr = curr.next;
  }
  console.log("listNodeFromArray()")
  console.log("Input:")
  console.log(arr)
  console.log("Output:")
  console.log(ln)
  return ln;
}

var addTwoNumbers = function(l1, l2) {
  
  const ListNodeToNumber = (l) => {
    const arr = [];
    let curr = l;
    while (curr) {
      arr.unshift(curr.val);
      curr = curr.next;
    }
    let num = +arr.join('');
    return Number.isSafeInteger(num) ? num : BigInt(arr.join(''));    
  }

  const NumberToListNode = (n) => {
    const arr = n.toString().split('');
    const ln = new ListNode(arr[arr.length - 1]);
    let curr = ln;
    for (let i = arr.length - 2; i >= 0 ; i--) {
      curr.next = { val: arr[i], next: null };
      curr = curr.next;
    }
    return ln;
  }

  let num1 = ListNodeToNumber(l1);
  let num2 = ListNodeToNumber(l2)

  if (typeof num1 !== typeof num2) {
    typeof num1 === 'bigint'
    ? num2 = BigInt(num2)
    : num1 = BigInt(num1)
  }

  return NumberToListNode(num1 + num2);
};



const printTest = (l1, l2) => {
  console.log(`Output:`)
  console.log(addTwoNumbers(l1, l2))
}
const l1 = listNodeFromArray([2,4,3]);
const l2 = listNodeFromArray([5,6,4]);
printTest(l1, l2);
