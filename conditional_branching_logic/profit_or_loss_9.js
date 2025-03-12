// Exercise 9
// Given cost price and selling price. Write a code which checks profit or loss.
// Formula to calculate profit and loss
// Profit = Selling Price - Cost Price
// Loss = Cost Price - Selling Price





function calculateProfitOrLoss(costPrice, sellingPrice) {
    if (sellingPrice > costPrice) {
        let profit = sellingPrice - costPrice;
        console.log(`Profit = ${profit}`);
    } else if (sellingPrice < costPrice) {
        let loss = costPrice - sellingPrice;
        console.log(`Loss = ${loss}`);
    } else {
        console.log("No profit and no loss");
    }
}

calculateProfitOrLoss(1200, 1045);
calculateProfitOrLoss(450, 1050);
calculateProfitOrLoss(120, 120);
