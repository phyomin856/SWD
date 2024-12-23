const obj = {
    a : "aaa",
    b : "bbb",
    c : "ccc",
}
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.is("1",1));
console.log(Object.hasOwn(obj,"a")); //------>true  
console.log(Object.hasOwn(obj,"p")); //------>false