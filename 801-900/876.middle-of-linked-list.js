/*
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
Example 2:


Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
 

Constraints:

The number of nodes in the list is in the range [1, 100].
1 <= Node.val <= 100
*/


var middleNode = function(head) {
  i = head;
  j = head;
  while (j?.next) {
      i = i.next;
      j = j.next.next;
  }
  return i;
};


/*
Runtime: 60 ms, faster than 98.38% of JavaScript online submissions for Middle of the Linked List.
Memory Usage: 42.3 MB, less than 7.33% of JavaScript online submissions for Middle of the Linked List.
*/