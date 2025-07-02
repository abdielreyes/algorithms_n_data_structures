class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const getPosition = (head, index) => {
  if (head == null) return null;
  if (index == 0) return head.val;
  return getPosition(head.next, index - 1);
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
console.log(getPosition(a, 2));
