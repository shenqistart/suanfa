const lessCom = (n, k) => {
  const res = [];
  const curr = [];
  fds(1);
  function fds(num) {
    if (curr.length === k) {
      res.push(curr.slice());
      return;
    }
    for (let i = num; i <= n; i++) {
      curr.push(i);
      fds(i + 1);
      curr.pop();
    }
  }
  return res;
};
console.log(lessCom(4, 2));
