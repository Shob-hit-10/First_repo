let a = 300
//same for const
// var c = 30

if(true){
    let a = 10
    const b = 20
    console.log("INNER: ", a);
}

console.log(a);
//console.log(b);

function one(){
    const username = "shobhit"
    
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if(true){
    const username = "shobhit"
    if(username === "shobhit"){
        const website = " yt"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

//***************Interesting********************

function addOne(value){
    return value + 1
}
addOne(5)

const addTwo = function (num){
    return num + 2
}
addTwo(5)