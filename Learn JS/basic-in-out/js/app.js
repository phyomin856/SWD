// const x = window.prompt("First Input")
// const y = window.prompt("Second Input")

// const result = parseFloat(x) + parseFloat(y)
// window.alert(`Total number is ${result}`)

///// Caluculation your birth year /////

// const age = window.prompt("How old are you?")
// const birthYear = 2025 - parseInt(age)
// window.alert(`You was born in ${birthYear}`)

// const answer = window.confirm("Are you married?")
// window.alert(answer ? "Yes,I am" : "No,I am not");

// console.log(document);

//1. Select //
// const btn = document.getElementById("btn");
// const heading = document.getElementById("heading")
// const textInput = document.getElementById("textInput")
// const list = document.getElementById("list")

// //2. Set //
// function changeTitle (){
//     heading.innerText = textInput.value;
//     textInput.value = "";
// }

//3. event listner //
// btn.onclick = changeTitle;
// btn.addEventListener("click",changeTitle);


// console.log(btn.innerHTML);
// console.log(btn.innerText);


// console.dir(heading.innerHTML);
// console.dir(heading.innerText);

// console.log(list.innerHTML);
// console.log(list.innerText);

// console.dir(textInput);
// const para = document.getElementsByTagName("p")
// console.log(para);
// console.log(para[0]);
// console.log(para[1]);
// console.log(para[2]);
// console.log(para[3]);
// const heading = document.getElementById("heading")
// console.log(heading);
// const lists = document.getElementsByClassName("list")
// console.log(lists);
// console.log(lists[0]);
// console.log(lists[0].innerHTML);
// console.log(lists[1].innerText);

// const para = document.querySelectorAll("p")
// console.log(para);
// const lists = document.querySelectorAll(".list")
// console.log(lists);
// console.log(lists[0].innerHTML);
// console.log(lists[1].innerText); 
// const heading = document.querySelector("#heading")
// console.log(heading.innerHTML);

// const lists = document.querySelector(".list")
// console.log(lists);
// console.log(lists.innerText);

// const heading = document.querySelector("#heading")
// const btn = document.querySelector("#btn")
// const largerHeading = document.querySelector("#largerHeading")
// const smallerHeading = document.querySelector("#smallerHeading")

// largerHeading.onclick = () => {
//     const current = parseInt(heading.style.fontSize)
//     heading.style.fontSize = `${current + 5}px ` ;
//     // console.log(current);
// }
// smallerHeading.onclick = () => {
//     const current = parseInt(heading.style.fontSize)
//     heading.style.fontSize = `${current - 5}px`;
// }





// btn.onclick = () => {
//     heading.style.color = "green"
//     heading.style.backgroundColor = "grey"

// }


// console.log(heading);
// console.log(heading.classList);
// console.log(heading.className);
// console.log(heading.classList);
// console.log(heading.className);
// console.log(heading.id);
// console.log(heading.title);
// console.log(heading.style);
// console.log(heading.style.textAlign);
// console.log(heading.style.color);