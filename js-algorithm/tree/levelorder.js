const root = require("./bt");
const levelOrder = (root) => {
  const res = [];
  if (!root) return res;
  const quene = [];
  quene.push(root);
  while (quene.length) {
    const len = quene.length;
    const level = [];
    for (let i = 0; i < len; i++) {
      let top = quene.shift();
      level.push(top.val);
      if (top.left) quene.push(top.left);
      if (top.right) quene.push(top.right);
    }
    res.push(level);
  }
  return res;
};
console.log(levelOrder(root));
