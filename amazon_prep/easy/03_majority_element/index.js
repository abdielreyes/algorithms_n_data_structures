//in most cases, all majoruty element will be at n/2
//
//the difference between using hashmap and this, is the space complexity
//it has O(1) space complexity and //O(nlogn) time complexity by the sorting algorithm
function solution(arr) {
    // it uses a variation of quicksort, which is O(n log n) on average
    arr.sort((a, b) => a - b);
    // the median of a sorted array is at n/2
    // if the array has an even length, we can return either of the two middle elements
    return arr[Math.floor(arr.length / 2)];
}

const cases = [
    [3, 2, 3],
    [2, 2, 1, 1, 1, 2, 2],
];

cases.forEach((arr) => {
    console.log(`Input: ${JSON.stringify(arr)} => Output: ${solution(arr)}`);
});
