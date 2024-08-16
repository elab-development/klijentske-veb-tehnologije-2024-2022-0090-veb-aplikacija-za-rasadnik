import React from 'react'
import {FaBeer} from 'react-icons/fa'
import { MdLocalShipping } from "react-icons/md";
import './nav.css';
import { IoIosSearch } from "react-icons/io";

const Nav = () => {
  return (
    <>
      <div className='header'>
        <div className='top_header'>
            <div className='icon'>
            <MdLocalShipping />

            </div>
            <div className='info'>
                <p>Free Shipping When Shopping upto $1000</p>
            </div>
        </div>
        <div className='mid_header'></div>
            <div className='logo'>
                <img src='image/image.logo.webp' alt='logo'></img>
            </div>
            <div className='search_box'>
                <input type='text' value='' placeholder='search'></input>
                <button><IoIosSearch/></button>
            </div>
           
        </div>
    </>
  )
}

export default Nav
