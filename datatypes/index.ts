let num: number = 45;

//string;

let mystring: String = "hello dear";

let num2 = 12;
let num1 = 34;

const totalSum = num1 + num;

//function
function Hello(name: string) {
  console.log(name);
}

Hello("priya");

function CombineSum(val1: number | string, val2: number | string) {
  if (typeof val1 == "number" || typeof val2 == "number") {
    return val1.toString() + val2.toString();
  }
  return val1 + val2;
}

const result = CombineSum("56", 78);
console.log(result);
