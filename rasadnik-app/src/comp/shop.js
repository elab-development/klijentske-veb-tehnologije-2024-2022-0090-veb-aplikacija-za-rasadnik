import React, { useState } from 'react'
import './shop.css'
import { AiFillHeart, AiFillEye, AiOutlineClose } from 'react-icons/ai';
//import { MdCrueltyFree } from 'react-icons/md'
//import { FiFilter } from 'react-icons/fi';


const Shop = ({shop, Filter, allcatefilter, addtocart}) => {

    const [showDetail, setShowDetail] = useState(false)

    const [detail, setDetail] = useState([])

    const detailpage = (product) =>
    {
        const detaildata =  ([{product}])
        const productdetail = detaildata[0]['product']
        console.log(productdetail)
        setDetail(productdetail)
        setShowDetail(true)
    }
    //console.log(productdetail)
    const closedetail = () =>
    {
        setShowDetail(false)
    }
  return (
    <>
    {
        showDetail ?
        <>
        <div className='product_detail'>
            <button className='close_btn' onClick={closedetail}><AiOutlineClose /></button>
            <div className='container'>
                <div className='img_box'>
                    <img src={detail.images} alt=''></img>
                </div>
                <div className='info'>
                    <h4># {detail.cat}</h4>
                    <h2>{detail.Name}</h2>
                    <p>NEKI TEKST</p>
                    <h3>{detail.price} RSD</h3>
                    <button onClick={() => addtocart (detail)}>Add To Cart</button>
                </div>
            </div>
        </div>
        </>
        : null
    }
    
    <div className='shop'>
        <h2># Shop</h2>
        <p>Home . Shop</p>
      <div className='container'>
        <div className='left_box'>
            <div className='category'>
                <div className='header'>
                    <h2>All categories</h2>
                </div>
                <div className='box'>
                    <ul>
                        <li onClick={() => allcatefilter ()}># All</li>
                        <li onClick={() => Filter ("Saksijsko cveće")}># Saksijsko cveće</li>
                        <li onClick={() => Filter ("Žive ograde")}># Žive ograde</li>
                        <li onClick={() => Filter ("Ruže")}># Ruže</li>
                        <li onClick={() => Filter ("Drveće")}># Drveće</li>
                        <li onClick={() => Filter ("Čuvarkuće")}># Čuvarkuće</li>
                        <li onClick={() => Filter ("Četinari")}># Četinari</li>
                    </ul>
                </div>

            </div>
            <div className='banner'>
                <div className='img_box'>
                    <img src='images/sale20.jpg' alt=''></img>
                </div>
            </div>
        </div>
        <div className='right_box'>
            <div className='banner'>
                <div className='img_box'>
                    <img src='images/coverSale.jpg' alt=''></img>
                </div>
            </div>
            <div className='product_box'>
                <h2>Shop Product</h2>
                <div className='product_container'>
                    {
                        shop.map((curElm)=>
                        {
                            return(
                                <>
                                <div className='box'>
                                    <div className='img_box'>
                                        <img src={curElm.images} alt=''></img>
                                        <div className='icon'>
                                           <li><AiFillHeart /></li> 
                                           <li onClick={() => detailpage (curElm)}><AiFillEye /></li>
                                        </div>
                                    </div>
                                    <div className='detail'>
                                        <h3>{curElm.Name}</h3>
                                        <p>{curElm.price}</p>
                                        <button onClick={() => addtocart (curElm)}>Add to cart</button>
                                    </div>
                                </div>
                                </>
                            )
                        })
                    }
                    <div className='box'>

                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Shop