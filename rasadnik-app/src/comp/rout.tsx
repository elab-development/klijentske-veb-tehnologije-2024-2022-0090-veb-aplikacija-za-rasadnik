import React from 'react'
import { Routes, Route} from 'react-router';
import Home from '../pages/home';
import Shop from '../pages/shop';
import Cart from '../pages/cart';
import Contact from '../pages/contact';
import About from '../pages/about';

const Rout:  React.FC<any> = ({shop, Filter, allcatefilter,addtocart, cart, setCart}) => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home addtocart={addtocart} />}/>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
        <Route path='shop' element={<Shop shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path="/about" element={<About />} />
    </Routes>
    </>
  )
}

export default Rout