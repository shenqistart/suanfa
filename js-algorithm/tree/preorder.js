const bt = require("./bt");

const preorder = (root) => {
  if (!root) {
    return;
  }
  console.log(root.val);
  preorder(root.left);
  preorder(root.right);
};
// 明白核心，应该是重复遍历输出的内容
// 根节点=》左节点=》右节点
// 递归式：就是调用这个函数
// 递归边界：就是没有节点了

// DFS：（栈）
// BFS： （队列）

// 从基础入手，扩展衍生出具体问题。
// 比如排列问题转化为树的遍历的问题

// 从排列的顺序到所有可能的子集，从坑位到取与不取

// const preorder = (root) => {
//     if (!root) { return; }
//     const stack = [root];
//     while (stack.length) {
//         const n = stack.pop();
//         console.log(n.val);
//         if (n.right) stack.push(n.right);
//         if (n.left) stack.push(n.left);
//     }
// };

preorder(bt);
