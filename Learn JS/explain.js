// const wakeUp = function (wakeUpHour) {
//     if (wakeUpHour < 8) {
//         return "It's Ok"
//     }
//     return "u will be punish"
// }
// console.log(wakeUp(3));
// console.log(wakeUp(9));
// console.log(wakeUp(7));

// const goToSchool = function (money) {
//     if (money >= 200) {
//         return "u can ride bus"
//     }
//     return "u will walk"
// }
// console.log(goToSchool(300));
// console.log(goToSchool(200));
// console.log(goToSchool(150));

// const result = function (mark) {
//     if (mark >= 80) {
//         return "passed with D"
//     } else if (mark >= 40) {
//         return "passed"
//     } else if (mark < 40) {
//         return "failed"
//     }
// };
// console.log(result(30));
// console.log(result(40));
// console.log(result(31));
// console.log(result(79));
// console.log(result(80));

// const entrance = function (writing, speaking) {
//     if (writing > 60 && speaking > 60) {
//         return "Passed"
//     }
//     return "Failed"
// };
// console.log(entrance(40, 65));
// console.log(entrance(70, 65));
// console.log(entrance(79, 60));

// const bus = function (no) {
//     if (no === 20 || no === 65) {
//         return "u will reach MMS IT"
//     }
//     return "u won't reach MMS IT"
// }
// console.log(bus(20));
// console.log(bus(65));
// console.log(bus(80));

//loop
// for (let i = 1; i <= 7; i++) {
//     console.log(i);
//     if (i === 3 || i === 5) continue;
//     console.log("*");
//     console.log("* *");
//     console.log("* * *");
// }
// Array of fruits
const fruits = ["Apple",
    "Banana",
    "Orange",
    "Mango",
    "Pineapple",
    "Strawberry"];
// for (el of fruits) {
//     console.log(el);
// }
// for (i = 0; i < fruits.length; i++) {
//     console.log(i, fruits[i]);
// }
for (i in fruits) {
    console.log(i, fruits[i]);
}
