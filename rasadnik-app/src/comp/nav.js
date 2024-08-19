import React from 'react';
import { MdLocalShipping } from "react-icons/md";
import { AiOutlineSearch } from 'react-icons/ai';
import { FiLogIn } from 'react-icons/fi';
import { CiLogout } from 'react-icons/ci';
import { useAuth0 } from "@auth0/auth0-react"; 

import './nav.css';

const Nav = () => {

  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

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
        <div className='mid_header'>
          <div className='logo'>
            <img src='image/image.logo.webp' alt='logo'></img>
          </div>
          <div className='search_box'>
            <input type='text' placeholder='search'></input>
            <button><AiOutlineSearch /></button>
          </div>
          {
            isAuthenticated ?
            // Logout button
            <div className='user'>
             <div className='icon'>
               <CiLogout />
             </div>
             <div className='btn'>
               <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
             </div>
           </div>
          :
          //Login button
          <div className='user'>
            <div className='icon'>
              <FiLogIn />
            </div>
            <div className='btn'>
              <button onClick={() => loginWithRedirect()}>Login</button>
            </div>
        </div>
          }
        </div>
      </div>
    </>
  );
};

export default Nav;