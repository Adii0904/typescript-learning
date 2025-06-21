var num = 45;
//string;
var mystring = "hello dear";
var num2 = 12;
var num1 = 34;
var totalSum = num1 + num;
//function
function Hello(name) {
    console.log(name);
}
Hello("priya");
function CombineSum(val1, val2) {
    if (typeof val1 == "number" || typeof val2 == "number") {
        return val1.toString() + val2.toString();
    }
    return val1 + val2;
}
var result = CombineSum("56", 78);
console.log(result);
