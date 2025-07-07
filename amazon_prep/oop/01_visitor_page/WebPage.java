import java.util.HashMap;
import java.util.LinkedList;
import java.util.Queue;

public class WebPage {
    private Queue<String> visitorHistory;
    private HashMap<String, Integer> users;

    public WebPage() {
        this.visitorHistory = new LinkedList<String>();
        this.users = new HashMap<>();
    }

    public boolean visit(String username) {
        // Register only once visit per user
        // Can be called multiple times by the same user

        // check if requested user is in the users hashmap
        if (!users.containsKey(username)) {
            users.put(username, 1);
            visitorHistory.add(username);
            return true;
        } else {
            visitorHistory.add(username);
        }
        return false;
    }

    public String getFirstVisitor() {
        // Get the latest userVisitor(the first into the visitorHistory queue)
        String firstVisitor = visitorHistory.peek();
        return firstVisitor;
    }
}
