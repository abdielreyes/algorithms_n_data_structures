class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const minimumValue = (root) => {
  //must be positive infinitie
  //infinite is our basis to construct default values, to not be considered in Math.min
  if (root === null) return Infinity;
  const left = minimumValue(root.left);
  const right = minimumValue(root.right);
  return Math.min(root.val, left, right);
};

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(minimumValue(a));
