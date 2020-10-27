const root = require("./bt");

const invertTree = (root) => {
  if (!root) return root;
  let right = invertTree(root.right);
  let left = invertTree(root.left);
  root.right = left;
  root.left = right;
  return root;
};

console.log(invertTree(root));
