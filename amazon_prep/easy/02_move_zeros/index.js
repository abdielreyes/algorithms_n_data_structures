function solution(arr) {
    // Move all zeros to the end of the array while maintaining the order of non-zero elements
    // start is an pointer // to the first zero found in the array
    let start = 0;
    for (let i = 0; i < arr.length; i++) {
        console.log(arr);
        // if the current element is not zero, we swap it with the first zero found
        if (!arr[i] == 0) {
            let aux = arr[i];
            arr[start] = aux;
            // we set the current element to zero
            arr[arr.length - start] = 0;
            // we move the start pointer to the next position
            start++;
        }
    }

    return arr;
}

const cases = [[0, 1, 0, 3, 12], [0]];

cases.map((e) => {
    console.log(solution(e));
});
