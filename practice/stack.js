let str = "{}";

function isTrueStack(str) {
  const m = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  if (!str) {
    return true;
  }
  const stack = [];
  const len = str.length;
  for (let i = 0; i < len; i++) {
    const ele = str[i];

    if (ele === "{" || ele === "[" || ele === "(") {
      stack.push(m[ele]);
    } else {
      let strRi = stack.pop();
      //   特别关注这里，pop出的值再判断的时候可能会有问题
      console.log(
        stack.pop(),
        ele,
        stack.length,
        strRi !== ele,
        stack.pop() !== ele
      );
      if (strRi !== ele && !stack.length) {
        return false;
      }
    }
  }
  return !stack.length;
}
console.log(isTrueStack(str));
