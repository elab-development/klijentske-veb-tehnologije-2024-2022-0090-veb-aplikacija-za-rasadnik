import React from 'react'
import './footer.css'
import { FaHeadphonesAlt, FaPiggyBank, FaShippingFast, FaWallet } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='container'>
            <div className='left-box'>
                <div className='box'>
                    <div className='icon_box'>
                        <FaPiggyBank />
                    </div>
                    <div className='detail'>
                        <h3>Great Saving</h3>
                        <p>Lorem ipsum dolor dit amet,</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon_box'>
                        <FaShippingFast />
                    </div>
                    <div className='detail'>
                        <h3>free delivery</h3>
                        <p>Lorem ipsum dolor dit amet,</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon_box'>
                        <FaHeadphonesAlt />
                    </div>
                    <div className='detail'>
                        <h3>24/7 support</h3>
                        <p>Lorem ipsum dolor dit amet,</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon_box'>
                        <FaWallet />
                    </div>
                    <div className='detail'>
                        <h3>money back</h3>
                        <p>Lorem ipsum dolor dit amet,</p>
                    </div>
                </div>
            </div>
            <div className='right_box'>
                <div className='header'>
                    <img src='image/image.logo.webp' alt=''></img>
                    <p>If you want to receive any notification, please contact us.</p>
                </div>
                <div className='bottom'>
                    <div className='box'>
                        <h3>Your Account</h3>
                        <ul>
                            <li>About us</li>
                            <li>Account</li>
                            <li>Payment</li>
                            <li>sales</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h3>products</h3>
                        <ul>
                            <li>Delivery</li>
                            <li>Track Oder</li>
                            <li>New product</li>
                            <li>old product</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h3>contact us</h3>
                        <ul>
                            <li>11000, Rasadnik Beograd</li>
                            <li>+(381)60123123</li>
                            <li>info@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>  
        </div>
    </div>
    </>
  )
}

export default Footer