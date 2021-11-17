/***
 *给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 */

var lengthOfLongestSubstring = function (s) {
  const set = new Set()
  //需要两个指针， 表示最大长度的变量
  let i = 0, j = 0, maxLength = 0;
  //判断s的长度
  if (s.lenght === 0) return 0

  for (i; i < s.length; i++) {
    //若是set中没有s[i]就将这个值添加到set
    if (!set.has(s[i])) {
      set.add(s[i])
      //同时更新maxLength
      maxLength = Math.max(maxLength, set.size)
    } else {
      //若果set里面有s[i]就一直不会停,直到没有就会结束while循环
      while (set.has(s[i])) {
        set.delete(s[j])
        j++
      }
      set.add(s[i])
    }
  }
  return maxLength
};


console.log(lengthOfLongestSubstring('sidudoidsahdjsahdjshdjkhsak'))