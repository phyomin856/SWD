//1. Select //
const result = document.getElementById("result");
const storeBtn = document.getElementById("storeBtn");
const clearBtn = document.getElementById("clearBtn");
const width = document.getElementById("width");
const breadth = document.getElementById("breadth");
const calc = document.getElementById("calc");
const recordList = document.getElementById("recordList")


//2. fun //
const area = (w,b) => w * b;

//3. event //
calcBtn.onclick = () => {
    // process
    const w = width.valueAsNumber;
    const b = breadth.valueAsNumber;
    const a = area(w,b)

    result.innerText = `${w}ft * ${b}ft = ${a}sqft`
    width.value = "";
    breadth.value = "";
};

clearBtn.onclick = () => {
    result.innerText = "";
};

storeBtn.onclick = () => {
    recordList.innerHTML += `<li> ${result.innerText} </li>`
    result.innerText = "";
}