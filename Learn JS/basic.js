const name = "MgMg";
let age = 15;
let town = "Kyauk Myaung";
let pocketMoney = 200;
let orangePrice = 50;
pocketMoney -= orangePrice;
// console.log(pocketMoney);

const bag = ["Myanmar Book", "English Book", "Bio Book"];
console.log(bag);
let pen = false;
let canMgMgFriSmoke = true;
let canMgMgSmoke = false;

const information = {
    name,
    age,
    town,
    canSmoke: canMgMgSmoke,
};
const student1 = {
    name: "Kyaw Kyaw",
    age: 14,
    town: "Bahan",
    canSmoke: true,
};
const student2 = {
    name: "MyaMya",
    age: 25,
    town: " Yankin",
    canSmoke: false,
};
const student3 = {
    name: "Mya Mya",
    age: 25,
    town: "San Chaung",
    canSmoke: false,
};
const students = [
    student1,
    student2,
    student3,
    information
];
console.table(students);