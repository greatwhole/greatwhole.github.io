median-of-two-sorted-arrays

https://leetcode.com/problems/median-of-two-sorted-arrays/

这本来是一道很常规的「两路并归排序」问题，但是这套题目有一个要求是，是：
O(log(m+n)) 的时间复杂度。真因为此，此题目的难度是 hard

这道题可以用简单的二分法来完成

由于两个数组都已经排列过了，所以取每个的 median 其实是很方便的


```python

class Solution(object):
    def findMedianSortedArrays(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: float
        """
        len1 = len(nums1)
        len2 = len(nums2)
        if nums1[0] >= nums2[len2-1]:
            # 转化成了对 [...nums2 , ...nums1] 取中位数
        if nums1[len1-1] <= num2[0]:
            # 转化成对 [...num1, ...nums2] 取中位数
        
```
