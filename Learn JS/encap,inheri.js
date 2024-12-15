// // // Inheritance // // // 
// class Person{
//     constructor(name,age,color){
//         this.name = name;
//         this.age = age;
//         this.skinColor = color
//     }
// }

// class Student extends Person{
//     constructor(name,age,color,major,year){
//         super(name,age,color);
//         this.major = major;
//         this.year = year;
//     }
// }
// const person1 = new Person("Mg Mg ", 21 , "brown")
// console.log(person1);

// const person2 = new Student("Mya Lay", 22 , "yellow", "CS" , "firstYear")
// console.log(person2);

// class A{
//     a = "a";
//     b = "b";
//     c = "c";
//     d(){
//         return "d"
//     }
//     e(){
//         return "e"
//     }
// }
// const a = new A
// class X extends A{
//     x = "x";
//     y = "y";
//     z = "z";
// }
// const x = new X
// console.log(a);
// console.log(a.d());
// console.log(a.e());
// console.log(x.x);
// console.log(x.y);
// console.log(x.e());

// class Free{
//     repo = "unlimited";
//     push(){};
//     pull(){};
// }
// class Team extends Free{
//     codeSpace = true;
//     online(){};
// }
// class Enterprise extends Team{
//     manage = "user";
//     defineRules(){};
// }
// const f = new Free;
// const t = new Team;
// const e = new Enterprise;

// console.log(f);
// console.log(t);
// console.log(e);


// // // Encapsulation // // //
// class A{
//     y = 'yyy'
//     #x = "xxx"
//     getX(){
//         return this.#x;
//     }
//     setX(newvalue){
//         return this.#x = newvalue;
//     }
// }
// const a = new A
// a.setX ("haha")
// console.log(a.getX());

// class A{
//     #x = "xxx"
//     getX(){
//         return this.#x
//     }
//     setX(newvalue){
//         return this.#x = newvalue
//     }
// }
// const a = new A;
// a.setX("Pyn lr kk")
// console.log(a.getX());


class Bank{
    #money = 0

    checkBalance(){
        return this.#money
    }
    addMoney(amount){
        return this.#money += amount
    }
    transferMoney(whom,amount){
        if(amount < this.#money){
            this.#money -= amount
            return `successfully transfer ${amount} to  ${whom} .`
        }else{
            return "You do not have enough money."
        }
    }
    withDraw(money){
        if(money < this.money){
            return `You withdraw ${money} from your account`
        }else{
            return "You do not have enough money"
        }
    }
}
const b = new Bank
console.log(b.checkBalance());
console.log(b.addMoney(3000));
console.log(b.checkBalance());
console.log(b.addMoney(102300));
console.log(b.transferMoney("MG MG", 30000));
console.log(b.checkBalance());
console.log(b.withDraw(80000));