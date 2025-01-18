const mySym=Symbol("key1")
const Jsuser={
    name:"sneha",
    age:21,
    [mySym]:"mykey1",
    location:"ranchi",
    email:"btech10574.23@bitmesra.ac.in",
    isLoggedIn: false,
    lastLoginDays:["Monday,Saturday"],

}
console.log(Jsuser.email)
console.log(Jsuser["email"])
console.log(Jsuser[mySym])
Jsuser.email="snehakhandelwal2k04@gmail.com"
Object.freeze(Jsuser);
console.log(Jsuser)
