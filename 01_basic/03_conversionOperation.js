let score="33abc"
console.log(typeof(score));

let valueInNumber=Number(score)
console.log(typeof(valueInNumber));

console.log(valueInNumber);

// "33" => 33
// "33abc" => Nan (Not a Number)
// true => 1, false => 0

let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1 => true
//"" => false
//"shobhit" => true

let someNumber=33
let stringNumber=String(someNumber)
console.log(typeof stringNumber);