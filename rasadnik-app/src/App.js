import React, {useState} from 'react'
import Nav from './comp/nav'
import {BrowserRouter} from 'react-router-dom'
import Rout from './comp/rout'
import Footer from './comp/footer'
import Homeproduct from './comp/home_product'
//import Home from './comp/home'

const App = () => {
  //Add to cart
  const [cart,setCart] = useState([])
//shop page product
  const[shop,setShop]=useState(Homeproduct)
  const[search, setSearch] = useState('')
  const Filter = (x) =>
  {
    const cateFilter = Homeproduct.filter ((product) =>
    {
      return product.cat === x
    })
    setShop(cateFilter) 
  }
  const allcatefilter = () =>
  {
    setShop(Homeproduct)
  }
  //Shop Search Filter
  const searchlenght = (search || []).length === 0
  const searchproduct = () =>
  {
  if(searchlenght)
  {
    alert("Please Search Something!")
    setShop(Homeproduct)
  }
  else
  {
 
      
        const searchfilter = Homeproduct.filter((x) =>
        {
          return x.cat === search
        })
        setShop(searchfilter)
      
  }
}
  //Add To cart

  const addtocart = (product) =>
  {
    const exist = cart.find((x) =>{
      return x.id === product.id
    })
    if(exist)
    {
      alert("This product is already added in cart")
    }
    else
    {
      setCart([...cart,{...product, qty:1}])
      alert("Added to cart")
    }


  }
    console.log(cart)
  return (
    <>
      <BrowserRouter>
      <Nav search={search} setSearch={setSearch} searchproduct={searchproduct}/>
      <Rout setCart={setCart} cart={cart} shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>
      <Footer />
      </BrowserRouter>
      
    </>
  )
}

export default App
