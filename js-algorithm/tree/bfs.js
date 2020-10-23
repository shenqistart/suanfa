const tree = {
  val: "a",
  children: [
    {
      val: "b",
      children: [
        {
          val: "d",
          children: [],
        },
        {
          val: "e",
          children: [],
        },
      ],
    },
    {
      val: "c",
      children: [
        {
          val: "f",
          children: [],
        },
        {
          val: "g",
          children: [],
        },
      ],
    },
  ],
};

function bfs(tree) {
  const que = [];
  que.push(tree);
  while (que.length) {
    const top = que[0];
    console.log(top.val);
    top.children.forEach((element) => {
      que.push(element);
    });
    que.shift();
  }
}

bfs(tree);
