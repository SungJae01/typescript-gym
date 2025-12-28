// let data = {
//     name: '성재네 식당',
//     category: 'western',
//     address:{
//         city:'incheoi',
//         detail:'somewhere',
//         zipCode:12345634
//     },
//     menu:[{name:"rose pasta",price:20000,category:"PASTA"},{name:"garlic steak",price:30000,category:"STEAK"}]
// }

export type Restaurant = {
    name:string;
    category:string;
    address:Address;
    menu:Menu[]
}

export type Address = {
    city:string;
    detail:string;
    zipCode:Number;
}

export type Menu = {
    name:string;
    price:Number;
    category:string;
}

export type AddressWithoutZip = Omit<Address, 'zipCode'>