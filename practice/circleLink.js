// js不能模拟环形链表
// const head = {
//   val: 3,
//   next: {
//     val: 2,
//     next: {
//       val: 0,
//       next: {
//         val: -4,
//         next: {
//           val: 2,
//           next: {
//             val: 0,
//             next: {
//               val: -4,
//               next: null,
//             },
//           },
//         },
//       },
//     },
//   },
// };

function hasCicle(head) {
  while (head) {
    if (head.flag) {
      return true;
    }
    head.flag = true;
    head = head.next;
  }
  return false;
}
console.log(hasCicle(head));
