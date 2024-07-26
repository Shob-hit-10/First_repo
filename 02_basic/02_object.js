//singleton
// Object.create
//objext literals

const mysym = Symbol("key1")



const JsUser = {
    name: "Shobhit",
    "full name": "Shobhit Kumar",
    [mysym]: "mykey1",
    age: 22,
    location: "Ghaziabad",
    email: "shobhit@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"]);
// console.log(JsUSer.full name);
// console.log(JsUser.mysym);
console.log(JsUser[mysym]);

JsUser.email = "ok@gmail.com"
console.log(JsUser["email"]);
// Object.freeze(JsUser)
JsUser.email = "why@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello js User, ${this.name}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())