const fs = require("fs");
const https = require("https");

console.log("Hello world");

var a = 45961;
var b = 789632;

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Fetched data successfully");
});

setTimeout(() => {
  console.log("settimeout called after 5 seconds");
}, 5000);

fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.log("File data", data);
});

function multiplyFn(x, y) {
  const results = a * b;
  return results;
}

var c = multiplyFn(a, b);

console.log(c);
