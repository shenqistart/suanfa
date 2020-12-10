// 给定 nums = [2, 7, 11, 15], target = 9
function toSum(nums, target) {
  const diffs = {};
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (diffs[target - nums[i]] !== undefined) {
      return [i, diffs[target - nums[i]]];
    }
    diffs[nums[i]] = i;
  }
}

console.log(toSum([2, 7, 11, 15], 9));
