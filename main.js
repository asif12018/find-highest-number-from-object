



const mobiles = [
    {name: 'Samsung', price: 20000, camera: '12mp', color: 'black'},
    {name: 'xoami', price: 1800, camera: '12mp', color: 'black'},
    {name: 'Oppo', price: 30000, camera: '12mp', color: 'black'},
    {name: 'Iphone', price: 100000, camera: '12mp', color: 'black'},
    {name: 'Walton', price: 31000, camera: '12mp', color: 'black'},
    {name: 'HTC', price: 2, camera: '12mp', color: 'black'}
];

function valueForMoney(phones){
     let bestMobile = phones[0].price;
    //  console.log(bestMobile)
     for(let phone in phones){
        if(phones[phone].price < bestMobile){
         
            bestMobile = phones[phone].price;
            
           
        }
     }

     const index = phones.map(e => e.price).indexOf(bestMobile);
     const mobile = phones[index].name;
     return mobile;
}

let result = valueForMoney(mobiles);
console.log(result);
