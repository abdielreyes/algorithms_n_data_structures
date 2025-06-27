function solution_not_optimal(prices) {
    let maximum_profit = 0;
    let minimum = prices[0];
    for (let i = 0; i < prices.length; i++) {
        for (let j = 0; j < i; j++) {
            if (prices[j] < minimum) {
                minimum = prices[j];
            }
        }
        profit = prices[i] - minimum;
        if (profit > maximum_profit) maximum_profit = profit;
    }
    return maximum_profit;
}
function solution(prices) {
    // This function calculates the maximum profit that can be made by buying and selling a stock on different days.
    let maximum_profit = 0;
    let minimum = prices[0];

    for (let i = 0; i < prices.length; i++) {
        // If the current price is less than the minimum price seen so far, update the minimum price.
        if (prices[i] < minimum) [(minimum = prices[i])];
        // Calculate the profit if we were to sell at the current price.
        let current_profit = prices[i] - minimum;
        // If the current profit is greater than the maximum profit seen so far, update the maximum profit.
        if (current_profit > maximum_profit) {
            maximum_profit = current_profit;
        }
    }
    return maximum_profit;
}

const ans = solution([7, 1, 5, 3, 6, 4]);
console.log(ans);

const ans2 = solution([7, 6, 4, 3, 1]);
console.log(ans2);
