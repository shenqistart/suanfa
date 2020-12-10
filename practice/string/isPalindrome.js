let str = "yessey";
// function isPalindrome(str) {
//   let res = str.split("").reverse().join("");
//   return res == str;
// }
function isPalindrome(str) {
  let len = str.length;
  let l = 0;
  let r = len - 1;
  while (l < r) {
    if (str[l] == str[r]) {
      l++;
      r--;
    } else {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome(str));
