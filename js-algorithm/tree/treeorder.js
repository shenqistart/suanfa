const bt = require("./bt");

// const preorder = (root) => {
//   if (!root) {
//     return;
//   }

//   preorder(root.left);
//   preorder(root.right);
//   console.log(root.val);
// };
// 明白核心，应该是重复遍历输出的内容
// 根节点=》左节点=》右节点
// 递归式：就是调用这个函数
// 递归边界：就是没有节点了

// DFS：（栈）
// BFS： （队列）

// 从基础入手，扩展衍生出具体问题。
// 比如排列问题转化为树的遍历的问题

// 从排列的顺序到所有可能的子集，从坑位到取与不取

const preorder = (root) => {
  if (!root) return;
  const stack = [];
  stack.push(root);
  const res = [];
  while (stack.length) {
    let cur = stack.pop();
    res.push(cur.val);
    if (cur.right) stack.push(cur.right);
    if (cur.left) stack.push(cur.left);
  }
  return res;
};

const beforeorder = (root) => {
  if (!root) return;
  const res = [];
  const stack = [];
  stack.push(root);
  while (stack.length) {
    let cur = stack.pop();
    res.unshift(cur.val);
    if (cur.left) stack.push(cur.left);
    if (cur.right) stack.push(cur.right);
  }
  return res;
};
const midorder = (root) => {
  if (!root) return;
  const stack = [];
  const res = [];
  let cur = root;
  while (cur || stack.length) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    res.push(cur.val);
    cur = cur.right;
  }
  return res;
};

console.log(preorder(bt), "preorder");
console.log(beforeorder(bt), "beforeorder");
console.log(midorder(bt), "midorder");
