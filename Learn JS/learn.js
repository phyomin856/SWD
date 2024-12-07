//Function
//Find Age
// function findAge(birthYear) {
//     let currentYear = 2024;
//     let age = currentYear - birthYear;
//     return age;
// }
// console.log(findAge(2003));
// console.log(findAge(2005));
// console.log(findAge(2001));

//Find Cost
// let total = 0;
// function buy(productName, price, quantity) {
//     let cost = price * quantity;
//     total += cost;
//     return productName + " - " + price + " - " + cost;
// };
// function findTax(amount, percentage) {
//     return amount * (percentage / 100);
// }
// console.log(findTax(100000, 5));
// console.log(findTax(450000, 5));
// console.log(findTax(45600000, 5));

// console.log(buy("Apple", 500, 5));
// console.log(buy("Banana", 300, 5));
// console.log(buy("Mango", 700, 4));
// console.log("Total = " + total);

// console.log(findTax(total, 5));
// console.log(findTax(total, 5));
// let Tax = findTax(total, 5);
// console.log("Tax is " + Tax);
// let netTotal = total + Tax;
// console.log(netTotal);
// if (netTotal > 5000) {
//     console.log("U will get lucky draw")
// }

//conditional statement
// function findReminder(number) {
//     let reminder = number % 2;
//     if (reminder == 0) {
//         return "Even"
//     } else {
//         return "Odd"
//     }
// }
// console.log(findReminder(4));
// console.log(findReminder(2));
// console.log(findReminder(6));
// console.log(findReminder(7));

// let result = "Over all passed"
// function exam(mark) {
//     if (mark >= 40) {
//         return "Passed"
//     } else {
//         result = "Over all failed"
//         return "Failed"
//     }
// }
// console.log(exam(50));
// console.log(exam(40));
// console.log(exam(56));
// console.log(exam(87));
// console.log(result);

//looping
for (i = 0; i <= 100; i += 10) {
    console.log(i);
};