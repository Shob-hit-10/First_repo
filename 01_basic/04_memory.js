//Stack (premitive) 

let myYtName="Shobhit"
let anothername=myYtName
anothername="whyyyy"
console.log(myYtName);
console.log(anothername);

// Heap(Non-premitive)
let user={
    email: "user@gmail.com",
    upi: "user@ybl",
}

let userTwo=user

userTwo.email="shobhit@gmail.com"
console.log(user.email);
console.log(userTwo.email);