import React, { FC } from 'react';
import './cart.css';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

interface CartItem {
  id: string;
  image: string;
  cat: string;
  Name: string;
  price: number;
  qty: number;
}

interface CartProps {
  cart: CartItem[];
  setCart: (cart: CartItem[]) => void;
}

const Cart: FC<CartProps> = ({ cart, setCart }) => {
  const incqty = (product: CartItem): void => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      setCart(cart.map((curElm) => (curElm.id === product.id ? { ...exist, qty: exist.qty + 1 } : curElm)));
    }
  };

  const decqty = (product: CartItem): void => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist && exist.qty > 1) {
      setCart(cart.map((curElm) => (curElm.id === product.id ? { ...exist, qty: exist.qty - 1 } : curElm)));
    }
  };

  const removeproduct = (product: CartItem): void => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist && exist.qty > 0) {
      setCart(cart.filter((curElm) => curElm.id !== product.id));
    }
  };

  const total: number = cart.reduce((price, item) => price + item.qty * item.price, 0);

  return (
    <>
      <div className='cart'>
        <h3>#cart</h3>
        {cart.length === 0 && (
          <div className='empty_cart'>
            <h2>Your Shopping cart is empty</h2>
            <Link to='/shop'><button>Shop Now</button></Link>
          </div>
        )}
        <div className='container'>
          {cart.map((curElm) => (
            <div className='box' key={curElm.id}>
              <div className='img_box'>
                <img src={curElm.image} alt='' />
              </div>
              <div className='detail'>
                <div className='info'>
                  <h4>{curElm.cat}</h4>
                  <h3>{curElm.Name}</h3>
                  <p>Price: {curElm.price} RSD</p>
                  <p>Total: {curElm.price * curElm.qty} RSD</p>
                </div>
                <div className='quantity'>
                  <button onClick={() => incqty(curElm)}>+</button>
                  <input type='number' value={curElm.qty} readOnly />
                  <button onClick={() => decqty(curElm)}>-</button>
                </div>
                <div className='icon'>
                  <li onClick={() => removeproduct(curElm)}><AiOutlineClose /></li>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='bottom'>
          {cart.length > 0 && (
            <>
              <div className='Total'>
                <h4>Sub Total: {total} RSD</h4>
              </div>
              <button>checkout</button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;