import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Store from './Store';
import { Address, Restaurant } from './model/resturant';
import BestMenu from './BestMenu';

let data:Restaurant = {
  name: '성재네 식당',
  category: 'western',
  address:{
    city:'incheoi',
    detail:'somewhere',
    zipCode:12345634
  },
  menu:[{name:"rose pasta",price:20000,category:"PASTA"},{name:"garlic steak",price:30000,category:"STEAK"}]
}

const App:React.FC = ()=> {
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data)
  const changeAddress =(address:Address)=>{
    setMyRestaurant({...myRestaurant,address:address})
  }
  const showBestMenuName = (name:string)=>{
    return name
  }
  return (
    <div className="App">
      <Store info={myRestaurant} changeAddress={changeAddress}/>
      <BestMenu name="불고기피자" category="피자" showBestMenuName={showBestMenuName}/>
    </div>
  );
}

export default App;
