const fs = require("fs");

setImmediate(()=> console.log("setimmedate"))

Promise.resolve("Promise").then(console.log)

fs.readFile("./file.txt", "utf8", ()=>{
    console.log("File reading CB")
})

setTimeout(() => {
    console.log("timer expired")
}, 0);

process.nextTick(()=>{
    process.nextTick(()=> console.log("inner tick"))
    console.log("next tick")
})

console.log("This is last line of code")