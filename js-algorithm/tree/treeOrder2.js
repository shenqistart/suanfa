const bt = require("./bt");
function beforeOrder(bt) {
  if (!bt) {
    return;
  }

  if (bt.left) beforeOrder(bt.left);
  if (bt.right) beforeOrder(bt.right);
  console.log(bt.val);
}
const res1 = [];
function beforeOrderWhile(bt) {
  if (!bt) {
    return res1;
  }
  const stack = [];
  stack.push(bt);
  while (stack.length) {
    let cur = stack.pop();
    res1.push(cur.val);

    if (cur.right) stack.push(cur.right);
    if (cur.left) stack.push(cur.left);
  }
  return res1;
}
const res2 = [];
function afterOrderWhile(bt) {
  if (!bt) {
    return res2;
  }
  const stack = [];
  stack.push(bt);
  while (stack.length) {
    const cur = stack.pop();
    res2.unshift(cur.val);
    if (cur.left) stack.push(cur.left);
    if (cur.right) stack.push(cur.right);
  }
  return res2;
}
const res3 = [];
function middleOrderWhile(bt) {
  if (!bt) {
    return res3;
  }
  const stack = [];
  let cur = bt;
  while (cur || stack.length) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    res3.push(cur.val);
    cur = cur.right;
  }
  return res3;
}
// beforeOrder(bt);
// beforeOrderWhile(bt);
console.log(beforeOrderWhile(bt), afterOrderWhile(bt), middleOrderWhile(bt));
