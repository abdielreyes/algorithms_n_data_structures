class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const printLinkedList = (head) => {
  let current = head;
  while (current != null) {
    console.log(current.val);
    current = current.next;
  }
};

const traverseRecursively = (head) => {
  if (head == null) return;
  let current = head;
  console.log(current.val);
  traverseRecursively(current.next);
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
traverseRecursively(a);
