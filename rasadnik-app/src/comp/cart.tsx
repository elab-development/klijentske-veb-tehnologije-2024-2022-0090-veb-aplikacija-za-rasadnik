import React from 'react'
import './cart.css'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'

const Cart = ({cart,setCart}:any) => {

    //Increase Quantity of cart product
    const incqty = (product:any) =>
    {
        const exist = cart.find((x:any) =>
        {
            return x.id === product.id
        })
        setCart(cart.map((curElm:any) =>
        {
            return curElm.id === product.id ? {...exist, qty: exist.qty + 1} : curElm
        }))
    }
    //Decrease Quantity of cart product
    const decqty = (product:any) =>
    {
        const exist = cart.find((x:any) =>
        {
            return x.id === product.id
        })
        setCart(cart.map((curElm:any) =>
        {
            return curElm.id === product.id ? {...exist, qty: exist.qty - 1} : curElm
        }))
    }
    //Removing cart product
    const removeproduct = (product:any) =>
    {
        const exist = cart.find((x:any) =>
        {
            return x.id === product.id
        })
        if(exist.qty > 0)
        {
          setCart(cart.filter((curElm:any) =>
        {
            return curElm.id !== product.id
        }))
        }
    }
    //Total price
    const total = cart.reduce((price:number, item:any) => price + item.qty * item.price, 0)
  return (
    <>
    <div className='cart'>
        <h3>#cart</h3>
        {
            cart.lenght === 0 &&
            <>
            <div className='empty_cart'>
                <h2>Your Shopping cart is empty</h2>
                <Link to='/shop'><button>Shop Now</button></Link>
                
            </div>
            </>
        }
        <div className='container'>
            {
                cart.map((curElm:any) =>
                {
                    return(
                        <>
                        <div className='box'>
                            <div className='img_box'>
                                <img src={curElm.image} alt=''></img>
                            </div>
                            <div className='detail'>
                                <div className='info'>
                                <h4>{curElm.cat}</h4>
                                <h3>{curElm.Name}</h3>
                                <p>Price: {curElm.price} RSD</p>
                                <p>Total: {curElm.price * curElm.qty} RSD</p>
                                </div>
                                <div className='quantity'>
                                    <button onClick={() => incqty (curElm)}>+</button>
                                    <input type='number' value={curElm.qty}></input>
                                    <button onClick={() => decqty (curElm)}>-</button>
                                </div>
                                <div className='icon'>
                                    <li onClick={() => removeproduct(curElm)}><AiOutlineClose/></li>
                                </div>
                            </div>
                        </div>
                        </>
                    )
                })
            }
        </div>
        <div className='bottom'>
            {
                cart.lenght >0 &&
                <>
                <div className='Total'>
                    <h4>Sub Total: {total} RSD</h4>
                </div>
                <button>checkout</button>
                </>
            }
        </div>
    </div>
    </>
  )
}

export default Cart