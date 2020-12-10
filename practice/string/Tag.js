// 思考：搜索的能力，如果搜索的内容太局限，就一步步的放大去搜索
// 获取到所有的Tag标签
var tags = document.getElementsByTagName("*");
var tagsArr = [];
function countTag() {
  //   for (var i = 0; i < tags.length; i++) {
  //     tagsArr.push(tags[i].tagName.toLowerCase());
  //   }
  //   console.log(tagsArr);
  return CountNames(tags);

  //定义一个数组用于存放相
  //   var temp = [];
  //   //定义一个空数组用于存放每一个标签；
  //   var tag = [];
  //   for (var i = 0; i < tagsArr.length; i++) {
  //     for (var j = i + 1; j < tagsArr.length + 1; j++) {
  //       if (tagsArr[i] == tagsArr[j]) {
  //         temp.push(tagsArr[j]);
  //         tagsArr.splice(j, 1);
  //         j--;
  //       }
  //       if (j == tagsArr.length - i) {
  //         temp.push(tagsArr[i]);
  //         tagsArr.splice(i, 1);
  //         i--;
  //         tag.push(temp);
  //         temp = [];
  //       }
  //     }
  //   }
  //   return tag;
}
function CountNames(tagArr) {
  let arr = [...tagArr];
  inputArr = arr
    .map((item) => {
      let curItem = item.tagName.toLowerCase();
      const reg = /^h/g;
      // console.log(curItem, reg.test(curItem), "reg");
      if (reg.test(curItem)) {
        return curItem;
      }
    })
    .filter((item) => {
      return item && item.trim();
    });
  console.log(inputArr, "input");
  let resAry = inputArr.reduce((acc, cur) => {
    // let curTag = cur.tagName.toLowerCase();
    if (cur in acc) {
      acc[cur]++;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});
  return resAry;
}
console.log(countTag());
