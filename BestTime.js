// iterate through array of numbers, for each iteration:
// 1) compare current iteration to minimum stored, if lower, substitute
// 2) compare difference from current iteration to minimum stored, from maximum difference stored, 
//    if higher, substitute.

// prices = [7,1,5,3,6,4];
prices = [7,6,4,3,1];
minPrice = prices[0];
maxDiff = 0;

for (i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
        minPrice = prices[i];
    } 
    if ((prices[i] - minPrice) > maxDiff) {
        maxDiff = (prices[i] - minPrice);
    }
}

alert(maxDiff);
