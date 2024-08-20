import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

const Home = () => {
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
                            <h2>Trending product</h2>
                        </div>
                        <div className='cate'>
                            <h3>New</h3>
                            <h3>Featured</h3>
                            <h3>Top selling</h3>
                        </div>
                    </div>
                </div>
                <div className='right_box'>
                </div>
            </div>
        </div>     
    </div>
    </>
  )
}

export default Home 