class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const printList = (head) => {
  if (head == null) return;
  let current = head;
  console.log(current.val);
  printList(current.next);
};
const reverseList = (head, prev = null) => {
  if (head == null) return prev;
  const next = head.next;
  head.next = prev;
  return reverseList(next, head);
};
const iterativeReverseList = (head) => {
  let prev = null;
  let current = head;
  while (current != null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
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
printList(a);
printList(reverseList(a));
