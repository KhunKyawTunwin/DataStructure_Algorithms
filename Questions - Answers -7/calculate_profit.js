function profit(prices){
    let profit = 0;
    for (let i = 0; i < prices.length -1; i++){
        for (let x = i +1; x < prices.length; x++){
            let currentProfit = prices[x] - prices[i];

            if (currentProfit > profit){
                profit = currentProfit;
            }
        }
    }
    return profit;
}

let ans = profit([100,450,650,700,300,80,56,200,600,400]);
console.log("The most profit is  " , ans);

// let array = [100,450,650,700,300,80,56,200,600,400];

// maxProfit = Math.max(array);
// console.log(maxProfit);



