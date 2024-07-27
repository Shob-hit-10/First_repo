function sayMyName(){
    console.log("H");
    console.log("E");
    console.log("L");
    console.log("L");
    console.log("O");
}
//sayMyName()

// function addTwoNum(num1, num2){
//     console.log(num1+num2);
// }
function addTwoNum(num1, num2){
    return num1+num2
}

const result = addTwoNum(3,4)
console.log(result);

function loginUserMsg(username="ok"){
    //if(!username)
    if(username === undefined){
        console.log("Enter name");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMsg());

function calCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calCartPrice(200, 400, 500));

const user = {
    username: "shobhit",
    price: 200
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "ok",
    price: 499
})

const myNewArr = [200, 400, 100, 600]
function returnSecVal(getArr){
    return getArr[1]
}

// console.log(returnSecVal(myNewArr));
console.log(returnSecVal([10,20,30,40]));