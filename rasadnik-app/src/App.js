import React, {useState} from 'react'
import Nav from './comp/nav'
import {BrowserRouter} from 'react-router-dom'
import Rout from './comp/rout'
import Footer from './comp/footer'
import Homeproduct from './comp/home_product'

const App = () => {
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
  const searchproduct = () =>
  {
    const searchfilter = Homeproduct.filter((x) =>
    {
      return x.cat === search
    })
    setShop(searchfilter)
  }
  return (
    <>
      <BrowserRouter>
      <Nav search={search} setSearch={setSearch} searchproduct={searchproduct}/>
      <Rout shop={shop} Filter={Filter} allcatefilter={allcatefilter}/>
      <Footer />
      </BrowserRouter>
      
    </>
  )
}

export default App
