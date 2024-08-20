import React, { useState } from 'react'
import './home.css'
import { createRoutesFromElements, Link } from 'react-router-dom'
import Homeproduct from './home_product'
import { FaEye, FaHeart } from "react-icons/fa";
const Home = () => {
    const [trendingProduct, setTrendingproduct] = useState(Homeproduct)
  //filter of trending products
    const filtercate=(x)=>
    {
        const filterproduct= Homeproduct.filter((curElm)=>
        {
            return curElm.type===x
        })
        setTrendingproduct(filterproduct)
    }

    //all trending product
    const allTrendingProduct=()=>
    {
        setTrendingproduct(Homeproduct)
    }
    return (
    <>
    <div className='home'>
        <div className='top_banner'>
            <div className='contant'>
                <h3>WELCOME TO PLANTBLOOM</h3>
                <Link to='/shop' className='link'>Shop now</Link>
            </div>
        </div>   
        <div className='trending'>
            <div className='container'>
                <div className='left_box'>
                    <div className='header'>
                        <div className='heading'>
                            <h2 onClick={()=> allTrendingProduct ()}>Trending product</h2>
                        </div>
                        <div className='cate'>
                            <h3 onClick={()=> filtercate ('new')}>New</h3>
                            <h3 onClick={()=> filtercate ('featured')}>Featured</h3>
                            <h3 onClick={()=> filtercate ('top')}>Top selling</h3>
                        </div>
                    </div>
                    <div className='products'>
                        <div className='container'>
                            {
                                trendingProduct.map((curElm) =>
                                {
                                    return(
                                        <>
                                        <div className='box'>
                                            <div className='img_box'>
                                                <img src={curElm.images} alt=''></img>
                                                <div className='icon'>
                                                    <div className='icon_box'>
                                                    <FaEye />
                                                    </div>
                                                    <div className='icon_box'>
                                                    <FaHeart />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='info'>
                                                <h3>{curElm.Name}</h3>
                                                <p>{curElm.price}</p>
                                                <button className='btn'>Add To Cart</button>
                                            </div>
                                        </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='right_box'>
                    <div className='container'>
                        <div className='testmonial'>
                            <div className='head'>
                                <h3>Our testmonial</h3>
                            </div>
                            <div className='detail'>
                                <div className='img_box'>
                                    <img src='images/about-img.webp' alt='testmonial'></img>
                                </div>
                                <div className='info'>
                                    <h1>Stephan Robot</h1>
                                    <h4>Web designer</h4>
                                    <p>DA NAPISEMO NEKI TEKST OVDE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>     
    </div>
    </>
  )
}

export default Home 