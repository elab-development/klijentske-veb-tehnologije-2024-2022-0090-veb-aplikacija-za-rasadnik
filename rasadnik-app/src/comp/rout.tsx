import React, { FC } from 'react';
import { Routes, Route } from 'react-router';
import Home from './home';
import Shop from './shop';
import Cart from './cart';
import Contact from './contact';

interface RoutProps {
  shop: any; // Replace 'any' with the appropriate type
  Filter: any; // Replace 'any' with the appropriate type
  allcatefilter: any; // Replace 'any' with the appropriate type
  addtocart: (item: any) => void; // Replace 'any' with the appropriate type
  cart: any[]; // Replace 'any' with the appropriate type
  setCart: (cart: any[]) => void; // Replace 'any' with the appropriate type
}

const Rout: FC<RoutProps> = ({ shop, Filter, allcatefilter, addtocart, cart, setCart }) => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home addtocart={addtocart} />} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
        <Route path='/shop' element={<Shop shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart} />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default Rout;