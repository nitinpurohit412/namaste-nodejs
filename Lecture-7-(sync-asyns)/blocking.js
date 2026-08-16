const crypto = require("crypto");

console.log("hello world");

var a = 5724;
var b = 56410;

crypto.pbkdf2Sync("password", "salt", 50000000, 50, "sha512")
console.log("First key is generated")


crypto.pbkdf2("password", "salt", 500000, 50, "sha512",
  (err, key) => {
    console.log("Secnd key is generated");
  });

function multiplyFn(x, y) {
  const results = a * b;
  return results;
}

var c = multiplyFn(a, b);

console.log(c);
