console.log("hello world");

var a = 5724;
var b = 56410;

setTimeout(() => {
    console.log("Call me ASAP");
    
}, 0);

setTimeout(()=>{
    console.log("this will be called after 3 seconds")
}, 3000)

function multiplyFn(x, y) {
  const results = a * b;
  return results;
}

var c = multiplyFn(a, b);

console.log(c);