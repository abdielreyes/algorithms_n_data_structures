
public class Main {

    // Basically the solution is sum the left branch of the tree, with their right
    // branch. and keep comparing the maximum
    //
    //
    int max = Integer.MIN_VALUE;

    public class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;

        TreeNode() {
        }

        TreeNode(int val) {
            this.val = val;
        }

        TreeNode(int val, TreeNode left, TreeNode right) {
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }

    private int dfs(TreeNode node) {
        int left = 0, right = 0;
        if (node.left != null) {
            left = dfs(node.left);
        }
        if (node.right != null) {
            right = dfs(node.right);
        }
        max = Math.max(max, left + right);
        return Math.max(left, right) + 1;
    }

    public static void main(String[] args) {

        Main main = new Main();

        // Example 1: Diameter passes through the root
        // 1
        // / \
        // 2 3
        // / \
        // 4 5
        TreeNode root1 = main.new TreeNode(1);
        root1.left = main.new TreeNode(2);
        root1.right = main.new TreeNode(3);
        root1.left.left = main.new TreeNode(4);
        root1.left.right = main.new TreeNode(5);
        main.max = Integer.MIN_VALUE;
        main.dfs(root1);
        System.out.println("Diameter (passes through root): " + main.max);

        // Example 2: Diameter does NOT pass through the root
        // 1
        // /
        // 2
        // /
        // 3
        // \
        // 4
        // \
        // 5
        TreeNode root2 = main.new TreeNode(1);
        root2.left = main.new TreeNode(2);
        root2.left.left = main.new TreeNode(3);
        root2.left.left.right = main.new TreeNode(4);
        root2.left.left.right.right = main.new TreeNode(5);
        main.max = Integer.MIN_VALUE;
        main.dfs(root2);
        System.out.println("Diameter (does NOT pass through root): " + main.max);
    }
}
