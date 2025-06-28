import java.util.Stack;

public class Main {
    public static boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            // check if char is valid
            if (c == '{' || c == '[' || c == '(') {
                stack.push(c);
            } else {
                // if here the stack is empty, there arent same number of brackets
                if (stack.size() == 0) {
                    return false;
                } else {
                    // see last item on stack
                    char p = stack.peek();
                    // compare if current char is closed and match with the last item on
                    // stack open
                    if ((p == '{' && c == '}') || (p == '[' && c == ']') ||
                            (p == '(' && c == ')')) {

                        stack.pop();
                    } else {
                        return false;
                    }
                }
            }
        }
        // if stack is empty, all brackets matched
        if (stack.size() == 0) {
            return true;
        }
        return false;
    }

    public static void main(String[] args) {
        String s1 = "{{([])}}";
        String s2 = "{{[])}}";
        System.out.println(isValid(s1));
        System.out.println(isValid(s2));
    }
}
