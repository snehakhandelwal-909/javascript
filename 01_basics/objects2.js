const tinderUser=new Object;
//console.log(tinderUser);
const tinderUser2={

};
//console.log(tinderUser2);
tinderUser.name="sneha";
tinderUser.mail="noone.gmail.com";
tinderUser.isLoggedIn=false;
//console.log(tinderUser);
const regularUser={
id:"1234sneha",
user2:{
 fullName:{
    firstName:"Sneha",
    lastName:"khandelwal",

},
},
gender:"female"
}
//console.log(regularUser.user2.fullName.firstName)
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
//const obj3={obj1,obj2}
//console.log(obj3)
const obj3=Object.assign({},obj1,obj2,obj4)
//console.log(obj3);
obj5={...obj1,...obj2,...obj3,...obj4};
//console.log(obj5);
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h2@gmail.com"
    },
    {
        id: 3,
        email: "h3@gmail.com"
    },
]

/*console.log(users[1].email);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));*/
// console.log(tinderUser.hasOwnProperty('isLogged'));










