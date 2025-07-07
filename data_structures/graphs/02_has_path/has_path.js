const hasPath = (graph, src, dst) => {
    //minimum case
    if (src == dst) return true;

    //iterate through neighbors
    for (let neighbor of graph[src]) {
        if (hasPath(graph, neighbor, dst) == true) {
            return true;
        }
    }
    return false;
};
const hasPathBFS = (graph, src, dst) => {
    const queue = [src];
    while (queue.length > 0) {
        const current = queue.shift();
        if (current == dst) return true;
        //push neighbors
        queue.push(...graph[current]);
    }
    return false;
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

console.log(hasPath(graph, "a", "f")); //true
console.log(hasPathBFS(graph, "a", "f")); //false
