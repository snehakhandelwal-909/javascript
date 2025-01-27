// const mynum=[1,2,3,4,5,6,7,8,9]
// const nos=mynum.map((num)=>num+10)
// .map((num)=>num*2)
// .map((num)=>num/2)
// console.log(nos);
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const ans=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(ans);

