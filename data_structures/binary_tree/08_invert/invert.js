/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    //dfs solution
    if (!root) return null;
    //swap left and right with aux constant
    let left = root.left;
    const aux = left;
    root.left = root.right;
    root.right = aux;

    invertTree(root.right);
    invertTree(root.left);
    //return root to send all tree
    return root;
};
