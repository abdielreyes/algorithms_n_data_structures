const iterativeDFS = (graph, source) => {
    const stack = [];
    stack.push(source);
    while (stack.length > 0) {
        //get current
        const current = stack.pop();
        console.log(current);
        //set neighbors
        stack.push(...graph[current]);
    }
};

const dfs = (graph, source) => {
    console.log(source);
    //iterate through neighbors
    for (let neighbor of graph[source]) {
        dfs(graph, neighbor);
    }
};

const iterativeBFS = (graph, source) => {
    const queue = [];
    queue.push(source);
    while (queue.length > 0) {
        const current = queue.shift();
        console.log(current);
        queue.push(...graph[current]);
    }
};

const graph = {
    a: ["b", "c"],
    b: ["d"],
    c: ["e"],
    d: ["f"],
    e: [],
    f: [],
};
//draw graph
// a
// b c
// d e
// f
console.log("DFS Iterative:");
iterativeDFS(graph, "a");
console.log("Recursive");
dfs(graph, "a");
console.log("BFS Iterative:");
iterativeBFS(graph, "a");
