longest-substring-without-repeating-characters

https://leetcode.com/problems/longest-substring-without-repeating-characters/

这道题，给我的感觉是有一些像 kmp 算法，不过，我还是用更简单的方式去实现吧

```python
class Solution1(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        head = 0 
        max_length = 0
        curr_length = 0
        for index, x in enumerate(s):

            if x in s[head:index]:
                # 加 1 是要取相同元素的下一个
                head = s[head:index].index(x) + 1 + head
                curr_length = index - head + 1

            else:
                curr_length += 1
                
                if curr_length > max_length:
                    max_length = curr_length
        return max_length

# 使用一个 map 来记录位置
# 不过这个的速度更慢。推测是 python 的性能原因。
class Solution2(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        map = dict()  # string:index
        curr_start = 0
        max_length = 0
        curr_length = 0
        for index, x in enumerate(s):
            # 已经存在了这个 key，拿 curr_length 与 max_length 比较并重置
            if x in map:                
                last_index = map[x]  # 找到同样数值的索引
                
                curr_length = index - last_index
                next_start = last_index + 1
                # 去除掉 map 中 index 值 小于 prev_index 的项
                for to_remove in s[curr_start: last_index+1]:
                    del map[to_remove]
                
                curr_start = next_start
                map[x] = index
            else:
                curr_length += 1
                if curr_length > max_length:
                    max_length = curr_length
                map[x] = index
        return max_length
```