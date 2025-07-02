class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const find = (head, target) => {
  if (head == null) return false;
  if (head.val == target) return true;
  return find(head.next, target);
};

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b;
b.next = c;
c.next = d;
// A -> B -> C -> D -> null

/* console.log(printLinkedList(a)); */
console.log(find(a, "D"));
console.log(find(a, "J"));
