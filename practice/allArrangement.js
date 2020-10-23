let ary = [1, 2, 3];
function allArrangement(ary) {
  let res = [];
  let Map = {};
  let curr = [];
  let len = ary.length;
  function dfs(nth) {
    if (nth === len) {
      res.push(curr.slice());
      return;
    }
    for (let i = 0; i < len; i++) {
      if (!Map[ary[i]]) {
        curr.push(ary[i]);
        Map[ary[i]] = 1;
        dfs(nth + 1);
        curr.pop();
        Map[ary[i]] = 0;
      }
    }
  }
  dfs(0);
  return res;
}
console.log(allArrangement(ary));
