const fs = require("fs");
const a = 100

setImmediate(()=> console.log("setimmedate"))

Promise.resolve("Promise").then(console.log)

fs.readFile("./file.txt", "utf8", ()=>{

    setImmediate(()=> console.log("2nd setimmedate"))

    setTimeout(() => {
    console.log("2nd timer expired")
}, 0);

process.nextTick(()=> console.log("2nd process.nextTick()"))

    console.log("File reading CB")
})

setTimeout(() => {
    console.log("timer expired")
}, 0);

process.nextTick(()=> console.log("process.nextTick()"))


function printA(){
    console.log("a =" , a)
}
printA()
console.log("This is last line of code")