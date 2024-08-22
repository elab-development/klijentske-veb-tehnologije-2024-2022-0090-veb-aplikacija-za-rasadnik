import React from 'react'
import './shop.css'
import { MdCrueltyFree } from 'react-icons/md'


const Shop = ({shop}) => {
  return (
    <>
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
                        <li># Saksijsko cvece</li>
                        <li># Zive ograde</li>
                        <li># Ruze</li>
                        <li># Drvece</li>
                        <li># Cuvarkuce</li>
                        <li># Cetinari</li>
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
