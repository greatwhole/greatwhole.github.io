add-two-numbers

https://leetcode.com/problems/add-two-numbers

这道题，主要是要考虑包括进位在内的多种 case + 递归

```
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNodes
        :rtype: ListNode
        """
        return self._addTwo(l1, l2, 0)

    
    def _addTwo(self, l1, l2, carry):
        if l1 is None and l2 is None and carry == 0:
            return None
        
        if l1 is None:
            l1_val = 0 
            l1_next = None
        else:
            l1_val = l1.val
            l1_next = l1.next
        
        if l2 is None:
            l2_val = 0
            l2_next = None
        else:
            l2_val = l2.val
            l2_next = l2.next

        val = l1_val + l2_val + carry
        
        if val >= 10:
            val -= 10
            new_carry = 1
        else:
            new_carry = 0
        node = ListNode(val)
        node.next = self._addTwo(l1_next, l2_next, new_carry)
        return node
          
```