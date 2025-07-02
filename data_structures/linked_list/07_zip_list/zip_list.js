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

const zipperListsIterative = (head1, head2) => {
  let tail = head1;
  let current1 = head1.next;
  let current2 = head2;
  let counter = 0;
  while (current1 != null && current2 != null) {
    if (counter % 2 == 0) {
      //list two
      tail.next = current2;
      current2 = current2.next;
    } else {
      //list one
      tail.next = current1;
      current1 = current1.next;
    }
    tail = tail.next;
    counter++;
  }
  if (current1 != null) tail.next = current1;
  if (current2 != null) tail.next = current2;
  return head1;
};

const zipperLists = (head1, head2) => {
  if (head1 == null && head2 == null) return null;
  //return the remainders
  if (head1 == null) return head2;
  if (head2 == null) return head1;

  const next1 = head1.next;
  const next2 = head2.next;

  head1.next = head2;
  head2.next = zipperLists(next1, next2);
  return head1;
};

//L1
// A -> B -> C -> D -> null
const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b;
b.next = c;
c.next = d;

//L2
// A -> B -> C -> D -> null
const q = new Node("Q");
const r = new Node("R");

q.next = r;

console.log("List 1");
printList(a);
console.log("List 2");
printList(q);
console.log("Zipped List");
printList(zipperLists(a, q));
