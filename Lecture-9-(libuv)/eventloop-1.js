const fs = require("fs");
const a = 100

setImmediate(()=> console.log("setimmedate"))

fs.readFile("./file.txt", "utf8", ()=>{
    console.log("File reading C8")
})

setTimeout(() => {
    console.log("timer expired")
}, 0);

function printA(){
    console.log("a =" , a)
}
printA()
console.log("This is last line of code")