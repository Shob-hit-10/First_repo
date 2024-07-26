const name = "Shobhit"
const repoCount = 50
console.log(name + repoCount + "value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('ShobhitJi')

console.log(gameName[0]);
console.log(gameName.__proto__);

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString= gameName.slice(-8,4)
console.log(anotherString);

const url = "https://shobhit.com/shobhit%20kumar"
console.log(url.replace('%20', '-')) ;