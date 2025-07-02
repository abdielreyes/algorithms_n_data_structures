class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const linkedListValues = (head) => {
  //in js, primitives are passed by reference
  //using two functions, avoid to Space O(n**2) creating one single values array
  const values = [];
  fillValues(head, values);
  return values;
};
const fillValues = (head, values) => {
  if (head == null) return;
  values.push(head.val);
  fillValues(head.next, values);
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
console.log(linkedListValues(a));
