var isValid = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        console.log(s[i]);
        if (s[i] == "{" || s[i] == "(" || s[i] == "[") {
            stack.push(s[i]);
        } else {
            //validate same number of brackets
            if (stack.length == 0) return false;
            //get last element of stack
            const curr = stack[stack.length - 1];
            console.log(curr);
            //see if matches and delete the pair on the stack
            if (
                (curr == "{" && s[i] == "}") ||
                (curr == "[" && s[i] == "]") ||
                (curr == "(" && s[i] == ")")
            ) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    if (stack.length == 0) {
        return true;
    }
};

console.log(isValid("()[]{}")); // true

console.log(isValid("(]")); // false
