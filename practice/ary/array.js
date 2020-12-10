// 两数之和
const ary = [2, 7, 11, 15];
const target = 9;

function aryTwoSum(ary, target) {
  let myMap = new Map();
  let len = ary.length;
  for (let i = 0; i < len; i++) {
    if (myMap.get(target - ary[i]) !== undefined) {
      return [myMap.get(target - ary[i]), i];
    }
    myMap.set(ary[i], i);
  }
}
console.log(aryTwoSum(ary, target));
