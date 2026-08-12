require("./xyz.js") // one module into another.


// const {x, calculateSum} = require("./calculate/sum.js")
// const {calculateMultiply} = require("./calculate/multiply.js")

const { calculateMultiply, calculateSum } = require("./calculate")
const data = require("./data")
console.log(data)

// var name = "Namaste Node.js"

var a = 10;
var b = 20;
calculateSum(a, b)
calculateMultiply(a, b)

