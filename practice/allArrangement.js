let ary = [1, 2, 3];
function allArrangement(ary) {
  const res = [];
  const curr = [];
  const len = ary.length;
  const map = {};
  function nth(num) {
    if (num === len) {
      res.push(curr.slice());
      return;
    }
    for (let i = 0; i < len; i++) {
      if (!map[ary[i]]) {
        curr.push(ary[i]);
        map[ary[i]] = 1;
        nth(num + 1);
        curr.pop();
        map[ary[i]] = 0;
      }
    }
  }
  nth(0);
  return res;
}
console.log(allArrangement(ary));
