import React, {useState} from 'react'
import Nav from './comp/nav'
import {BrowserRouter} from 'react-router-dom'
import Rout from './comp/rout'
import Footer from './comp/footer'
import Homeproduct from './comp/home_product'

const App = () => {
//shop page product
  const[shop,setShop]=useState(Homeproduct)

  return (
    <>
      <BrowserRouter>
      <Nav />
      <Rout shop={shop}/>
      <Footer />
      </BrowserRouter>
      
    </>
  )
}

export default App
