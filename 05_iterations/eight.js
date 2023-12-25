const myNums =[1,2,3]
 const myTotal = myNums.reduce((a,b)=>{
    console.log(a, b);
    return a+b;
 },0)

 console.log(myTotal);

 const shopingCart =[ 
    {
    itemName: 'js course',
    price: 2999
 },

 {
    itemName: 'python',
    price: 999
 },
 {
    itemName: 'data Science',
    price: 12999
 },

]

const priceToPay =shopingCart.reduce((accu, item)=>item.price+accu,0)

 console.log(priceToPay);


