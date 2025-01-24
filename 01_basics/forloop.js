 const arr=["sneha","ravi","kishan","mummy","papa"]
// for(const namess of arr){
//     console.log(namess);
    
// }
const map=new Map()
map.set("CRE","chemical reaction engineering")
map.set("MO","Mechanical Operations")
map.set("MSE","material science and engineering")
//console.log(map)
// for(const [key,value] of map){
//     console.log(key,'-',value);
    
// }
const subjects={
    "CRE":"chemical reaction engineering",
    "MO":"Mechanical Operations",
    "MSE":"material science and engineering"
}
// console.log(subjects);
// console.log(typeof(subjects));
// for(const name in subjects){
//     console.log( subjects[name]);
    
// }
// const addTwo = (num1, num2) =>  num1 + num2
// console.log(typeof(addTwo));

// arr.forEach((item)=>{
//     console.log(item);
// })
const profile=[
    {
        gender:"female",
        id:"snehakahndelwal2k04"
    },
       {
        gender:"female",
        id:"btech10574.23"
       }
]
// arr.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })
profile.forEach((item)=>{
    console.log(item.gender);
})

