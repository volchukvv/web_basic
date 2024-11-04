let Object = { name: "Object" };
let Array = [1, 2, 3];
let String = "Степан";
let Number = 3;
let Function = function() { return "hello"; };

console.log("Object:", Object, typeof varObject);
console.log("Array:", Array, typeof varArray);
console.log("String:", String, typeof String);
console.log("Number:", Number, typeof Number);
console.log("Function:", Function, typeof Function);


varString = 123;
varNumber = "980";

console.log("Літери як числа:", String, typeof String);
console.log("Числа як літери:", Number, typeof Number);


console.log("Comparing '123' == 123:", '123' == 123);
console.log("Comparing '123' === 123:", '123' === 123);


function encodeNumber(num) {
  return num.toString(16);
}

function decodeNumber(hex) {
  return parseInt(hex, 16);
}

let encoded = encodeNumber(12345);
console.log("Зашифроване число:", encoded);

let decoded = decodeNumber(encoded);
console.log("Дешифроване число:", decoded);