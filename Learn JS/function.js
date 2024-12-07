//Function Expression Example:
// const run = function (x) {
//     return x * 5

// }
// console.log(run(4));

// //IIFE (Immediately Invoked Function Expression) Example;
// (function () {
//     console.log("IIFE")
// })();

// //Function Invoke Another Function Example;
// const eBike = function () {
//     return "this is eBike"
// };
// const y = function () {
//     return eBike() + " this is y"
// };
// console.log(eBike());
// console.log(y());

// const results = [];
// let resultIndex = 0;

// const area = function (width, breath) {
//     const result = width * breath;
//     results[resultIndex++] = { width, breath, area: result }
//     return `${result} sqft`;
// };
// console.log(area(12, 50));
// console.log(area(15, 40));
// console.log(area(15, 50));
// console.table(results);

// const exchangeRate = {
//     usd: 5800,
//     eur: 6000,
//     sgd: 3800
// };
// const rate = function (amount, currency) {
//     let rates = exchangeRate[currency]
//     let result = amount * rates;
//     return `${result}mmk`
// }
// console.log(rate(200, "usd"));
// console.log(rate(200, "eur"));
// console.log(rate(200, "sgd"));

// const rateMyanmar = function (amount, currency) {
//     const rates = exchangeRate[currency]
//     const results = amount / rates;
//     return `${results} ${currency}`

// }
// console.log(rateMyanmar(2000000, "usd"));
// console.log(rateMyanmar(2000000, "eur"));
// console.log(rateMyanmar(2000000, "sgd"));

let total = 0
function buyFruits(productName, quantity, price) {
    let cost = quantity * price;
    total += cost
    return productName + " - " + cost
}
console.log(buyFruits("apple", 5, 500));
console.log(buyFruits("mango", 5, 1000));
console.log(buyFruits("banana", 5, 300));
console.log("Total - " + total);

function findTax(total, percentage) {
    return total * (percentage / 100)
}
let tax = findTax(total, 5)
console.log("Tax is " + tax);
let netTotal = total + tax;
console.log(netTotal);