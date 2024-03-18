function maxProfit(prices) {
  let maxProfit = 0;
  let minPrice = prices[0];
  for (let i = 0; i < prices.length; i++) {
    let sellPrice = prices[i];
    if (sellPrice < minPrice) {
      minPrice = sellPrice;
      // console.log(minPrice);
    }
    let profit = sellPrice - minPrice;
    maxProfit = Math.max(maxProfit, profit);
  }
  return maxProfit;
}
let ans = maxProfit([4, 4, 3, 2, 5, 7, 9, 10, 20]);
console.log("The Profit is ", ans);
