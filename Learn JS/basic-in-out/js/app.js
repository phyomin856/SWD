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
const btn = document.getElementById("btn");
const heading = document.getElementById("heading")
const textInput = document.getElementById("textInput")
const list = document.getElementById("list")

//2. Set //
function changeTitle (){
    heading.innerText = textInput.value;
    textInput.value = "";
}

//3. event listner //
// btn.onclick = changeTitle;
btn.addEventListener("click",changeTitle);








// console.log(btn.innerHTML);
// console.log(btn.innerText);


// console.dir(heading.innerHTML);
// console.dir(heading.innerText);

// console.log(list.innerHTML);
// console.log(list.innerText);

// console.dir(textInput);