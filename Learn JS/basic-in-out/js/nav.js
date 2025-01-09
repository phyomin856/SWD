const navControl = document.querySelector("#navControl")
const slide = document.querySelector("#slide")
const lists = document.querySelectorAll(".list")
const selectSkill = document.querySelector("#selectSkill")
console.log(navControl);

navControl.onclick =() => {
    slide.classList.toggle("translate-x-full")
}

lists.forEach((list) => {
    console.log(list);
list.onclick = () => {
     list.classList.toggle("bg-gray-300")
     const skillCount = 
}})