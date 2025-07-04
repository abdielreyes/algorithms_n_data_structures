class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const depthFirstValuesStack = (root) => {
  if (root === null) return [];
  const result = [];
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.val);
    //the order matters in which we push children onto the stack
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
  return result;
};
const depthFirstValuesRecursive = (root) => {
  if (root === null) return [];

  const left = depthFirstValuesRecursive(root.left);
  const right = depthFirstValuesRecursive(root.right);
  return [root.val, ...left, ...right];
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(depthFirstValuesStack(a));
console.log(depthFirstValuesRecursive(a));
