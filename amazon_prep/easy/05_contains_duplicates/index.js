function solution(arr) {
    let ans = false;
    const map = new Map();
    arr.forEach((num) => {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
            ans = true;
        } else {
            map.set(num, 1);
        }
    });
    return ans;
}

const cases = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5, 1],
];
cases.forEach((arr) => {
    console.log(`Input: ${arr}`);
    console.log(`Output: ${solution(arr)}`);
});
