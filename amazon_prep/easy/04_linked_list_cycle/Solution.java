class ListNode {
    int val;
    ListNode next;

    ListNode(int x) {
        val = x;
        next = null;
    }
}

public class Solution {
    public boolean hasCycle(ListNode head) {
        // Using Floyd's Cycle-Finding Algorithm (Tortoise and Hare)
        // This algorithm uses two pointers that move at different speeds.
        // If there is a cycle, they will eventually meet.
        // At first, check if the pointers met
        if (head == null || head.next == null) {
            return false;
        }
        // Initialize two pointers
        ListNode slow = head;
        ListNode fast = head.next;

        do {
            // Move slow pointer by one step
            slow = slow.next;
            // Move fast pointer by two steps
            fast = fast.next != null ? fast.next.next : null;
            // If they meet, there is a cycle
            if (slow == fast) {
                return true;
            }

        } while (slow != null && fast != null && fast.next != null);
        return false;
    }

    public static void main(String[] args) {
        // Example usage
        ListNode head = new ListNode(3);
        head.next = new ListNode(2);
        head.next.next = new ListNode(0);
        head.next.next.next = new ListNode(-4);
        head.next.next.next.next = head.next; // Creates a cycle
        Solution solution = new Solution();
        boolean result = solution.hasCycle(head);
        System.out.println("Has cycle: " + result); // Should print true
    }
}
