const mySym=Symbol("key1")
const Jsuser={
    name:"sneha",
    age:21,
    [mySym]:"mykey1",//square bracket means its a symbol otherwise compiler treats it as a string
    location:"ranchi",
    email:"btech10574.23@bitmesra.ac.in",
    isLoggedIn: false,
    lastLoginDays:["Monday,Saturday"],

}
/*console.log(Jsuser.email)
console.log(Jsuser["email"])
console.log(Jsuser[mySym])
Jsuser.email="snehakhandelwal2k04@gmail.com"
console.log(Jsuser.email)
Object.freeze(Jsuser);
console.log(Jsuser)*/
Jsuser.greeting=function(){
    console.log("Hello Js User");
}
Jsuser.greetingtwo=function(){
    console.log(`hello js user ${this.name} `);
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingtwo());
