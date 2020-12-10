// 给定数组 nums = [-1, 0, 1, 2, -1, -4]， 满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]
// 注意跳过重复的组合
let sum = [-4, -1, -1, 0, 1, 2];

function threeSum(sum) {
  sum = sum.sort((a, b) => {
    a - b;
  });
  let len = sum.length;
  let res = [];
  for (let i = 0; i < len - 2; i++) {
    let l = i + 1;
    let r = len - 1;
    if (i > 0 && sum[i] == sum[i - 1]) {
      continue;
    }
    while (r > l) {
      if (sum[l] + sum[r] + sum[i] < 0) {
        l++;
        while (r > l && sum[l] == sum[l - 1]) {
          l++;
        }
      } else if (sum[l] + sum[r] + sum[i] > 0) {
        r--;
        while (r > l && sum[r] == sum[r - 1]) {
          r--;
        }
      } else {
        res.push(sum[i], sum[l], sum[r]);
        l++;
        r--;
        while (r > l && sum[l] == sum[l - 1]) {
          l++;
        }
        while (r > l && sum[r] == sum[r - 1]) {
          r--;
        }
      }
    }
  }
  return res;
}
console.log(threeSum(sum));
