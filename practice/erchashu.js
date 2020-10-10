const root = {
  val: "a",
  left: {
    val: "b",
    left: {
      val: "d",
    },
    right: {
      val: "e",
    },
  },
  right: {
    val: "g",
    right: {
      val: "f",
    },
  },
};

function preorder(root) {
  // 递归边界，root 为空
  if (!root) {
    return;
  }

  // 输出当前遍历的结点值
  console.log("当前遍历的结点值是：", root.val);
  // 递归遍历左子树
  preorder(root.left);
  // 递归遍历右子树
  preorder(root.right);
}
function midorder(root) {
  // 递归边界，root 为空
  if (!root) {
    return;
  }

  // 递归遍历左子树
  midorder(root.left);
  // 输出当前遍历的结点值
  console.log("当前遍历的结点值是：", root.val);
  // 递归遍历右子树
  midorder(root.right);
}
function lastorder(root) {
  // 递归边界，root 为空
  if (!root) {
    return;
  }

  // 递归遍历左子树
  lastorder(root.left);
  // 递归遍历右子树
  lastorder(root.right);
  // 输出当前遍历的结点值
  console.log("当前遍历的结点值是：", root.val);
}
preorder(root);
midorder(root);
lastorder(root);
// 核心是从内存状态，运行过程的角度来做的
