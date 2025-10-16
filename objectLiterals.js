// Oject literal

const id= Symbol("user_id");
const JsUser = {
    username: "Govind Kumar",
    "email": "govind@gmail.com",
    age: 21,
    isLoggedin: 1,
    [id]: "govin@143",
}

console.log(JsUser)
console.log(JsUser[id])
// this right but in some cases doesnt work
console.log(JsUser.age)
// in this case the above thing doesnt work
// console.log(JsUser."email");

// this is most appropriate way of getting the value of js object
console.log(JsUser['username'])
// Adding key value pair
JsUser.tel= 8102558417
console.log(JsUser.tel);

console.log(Object.keys(JsUser))
console.log(Object.values(JsUser))