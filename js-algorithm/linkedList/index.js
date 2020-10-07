let a = { val: 'a' };
let b = { val: 'b' };
let c = { val: 'c' };
let d = { val: 'd' };
a.next = b;
b.next = c;
c.next = d;

// 遍历链表 为什么非要变为指针
let p = a;
while (p) {
	console.log(p.val);
	p = p.next;
}
// while (a) {
// 	console.log(a.val);
// 	a = a.next;
// }

// 插入
const e = { val: 'e' };
c.next = e;
e.next = d;

// 删除
c.next = d;

// 两数相加
var addTwoNumbers = function(l1, l2) {
	let l3 = new ListNode(0);
	let carry = 0;
	while (l1 || l2) {
		const v1 = l1 ? l1.val : 0;
		const v2 = l2 ? l2.val : 0;
		const val = v1 + v2 + carry;
		carry = Math.floor(val / 10);
		l3.next = new ListNode(val % 10);
		if (l1) {
			l1 = l1.next;
		}
		if (l2) {
			l2 = l2.next;
		}
		l3 = l3.next;
	}
	return l3.next;
};
