class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const linkedListValues = (head) => {
  if (head == null) return 0;
  return head.val + linkedListValues(head.next);
};

const a = new Node(1);
const b = new Node(2);
const c = new Node(2);
const d = new Node(5);

a.next = b;
b.next = c;
c.next = d;
// A -> B -> C -> D -> null

/* console.log(printLinkedList(a)); */
console.log(linkedListValues(a));
