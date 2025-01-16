const navControl = document.querySelector("#navControl")
const slide = document.querySelector("#slide")
const lists = document.querySelectorAll(".list")
const selectSkill = document.querySelector("#selectSkill")
const googleLink = document.querySelector("#googleLink")
const ytLink = document.querySelector("#ytLink")
const img1 = document.querySelector("#img1")
const img2 = document.querySelector("#img2")
const img3 = document.querySelector("#img3")
const images = document.querySelectorAll(".img")
// get attribute
// console.log(googleLink.href);
// console.log(googleLink.target);
// console.log(img1.src);
// console.log(img1.getAttribute("src"));

//set attribute
// googleLink.href = ("https://mms-it.com")
// googleLink.removeAttribute("target")
// img1.src = "./images/pattern.png"
// img1.setAttribute("src","./images/car.svg")

images.forEach((image) => {
    image.src = "./images/pattern.png"
})





console.log(navControl);
navControl.onclick =() => {
    slide.classList.toggle("translate-x-full")
}

lists.forEach((list) => {
    // console.log(list);
list.onclick = () => {
     list.classList.toggle("bg-gray-300")
     const skillCount = document.querySelectorAll(".list.bg-gray-300")
     selectSkill.innerText = skillCount.length
}})

