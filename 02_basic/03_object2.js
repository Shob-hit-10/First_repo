// const tinderUser = new Object() // singleton object
const tinderUser = {} //non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Shobhit"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "shobhit",
            lastname: "kumar"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = {obj1, obj2}
const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);

const users = [
    {
        id: 1,
        email: "ok@gmail.com"
    },
    {
        id: 1,
        email: "ok@gmail.com"
    },
    {
        id: 1,
        email: "ok@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.entries(tinderUser));


const course = {
    coursename: "js",
    price: "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor
const {courseInstructor: inst} = course 
console.log(inst);

// {json
//     "name": "shobhit",
//     "coursename": "js",
//     "price": "free"
// }

