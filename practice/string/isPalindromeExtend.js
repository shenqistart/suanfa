// 输入: "aba"
// 输出: True
// 示例 2:
// 输入: "abca"
// 输出: True
// 解释: 你可以删除c字符。
// 注意: 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。

function isPalindromeExtend(str) {
  let len = str.length;
  let l = 0;
  let r = len - 1;
  while (l < r && str[l] == str[r]) {
    l++;
    r--;
  }
  if (isPalindrome(l + 1, r)) {
    return true;
  }
  if (isPalindrome(l, r - 1)) {
    return true;
  }
  function isPalindrome(left, right) {
    while (right > left) {
      if (str[left] != str[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
  return false;
}

console.log(isPalindromeExtend("abca"));
