console.dir(Function);
const run = new Function("x","y","return x+y")
// console.log(run(2,4));
// console.dir(run.bind(null,1,4).apply());----> bind() + apply()
// console.dir(run.call(null,1,5));------> Only use Call()

function sumArr(){
    let total = 0
    for(x of arguments){
        total+=x
    }
    return total
}
console.log(sumArr(1,4,3,2,5,7));