import React, { useEffect, useState, FC } from 'react';
import './home.css';
import { createRoutesFromElements, Link } from 'react-router-dom';
import Homeproduct from './home_product';
import { FaEye, FaHeart } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { PiTiktokLogo } from "react-icons/pi";
import { AiFillEye, AiFillHeart, AiOutlineYoutube, AiOutlineShoppingCart } from "react-icons/ai";

interface Product {
    images: string;
    Name: string;
    price: number;
    type: string;
}

interface HomeProps {
    addtocart: (product: Product) => void;
}

const Home: FC<HomeProps> = ({ addtocart }) => {
    const [newProduct, setNewProduct] = useState<Product[]>([]);
    const [featuredProduct, setFeaturedProduct] = useState<Product[]>([]);
    const [topProduct, setTopProduct] = useState<Product[]>([]);
    const [trendingProduct, setTrendingproduct] = useState<Product[]>(Homeproduct);

    const filtercate = (x: string): void => {
        const filterproduct = Homeproduct.filter((curElm: Product) => {
            return curElm.type === x;
        });
        setTrendingproduct(filterproduct);
    }

    const allTrendingProduct = (): void => {
        setTrendingproduct(Homeproduct);
    }

    useEffect(() => {
        productcategory();
    }, []);

    const productcategory = (): void => {
        const newcategory = Homeproduct.filter((x: Product) => {
            return x.type === 'new';
        });
        setNewProduct(newcategory);

        const featuredcategory = Homeproduct.filter((x: Product) => {
            return x.type === 'featured';
        });
        setFeaturedProduct(featuredcategory);

        const topcategory = Homeproduct.filter((x: Product) => {
            return x.type === 'top';
        });
        setTopProduct(topcategory);
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
                                    <h2 onClick={() => allTrendingProduct()}>Trending product</h2>
                                </div>
                                <div className='cate'>
                                    <h3 onClick={() => filtercate('new')}>New</h3>
                                    <h3 onClick={() => filtercate('featured')}>Featured</h3>
                                    <h3 onClick={() => filtercate('top')}>Top selling</h3>
                                </div>
                            </div>
                            <div className='products'>
                                <div className='container'>
                                    {
                                        trendingProduct.map((curElm: Product) => {
                                            return (
                                                <div className='box' key={curElm.Name}>
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
                                                        <button className='btn' onClick={() => addtocart(curElm)}>Add To Cart</button>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <button>Show More</button>
                            </div>
                        </div>
                        <div className='right_box'>
                            <div className='right_container'>
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
                                <div className='newsletter'>
                                    <div className='head'>
                                        <h3>Newsletter</h3>
                                    </div>
                                    <div className='form'>
                                        <input type='email' placeholder='E-mail' autoComplete='off'></input>
                                        <button>Subscribe</button>
                                        <div className='icon_box'>
                                            <div className='icon'>
                                                <LuFacebook />
                                            </div>
                                            <div className='icon'>
                                                <FaInstagram />
                                            </div>
                                            <div className='icon'>
                                                <PiTiktokLogo />
                                            </div>
                                            <div className='icon'>
                                                <AiOutlineYoutube />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='banners'>
                    <div className='container'>
                        <div className='left_box'>
                            <div className='box'>
                                <img src='images/img10.webp' alt='banner'></img>
                            </div>
                            <div className='box'>
                                <img src='images/img11.webp' alt='banner'></img>
                            </div>
                        </div>
                        <div className='right_box'>
                            <div className='top'>
                                <img src='images/img12.webp' alt=''></img>
                                <img src='images/img13.webp' alt=''></img>
                            </div>
                            <div className='bottom'>
                                <img src='images/img9.webp' alt=''></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='product_type'>
                    <div className='container'>
                        <div className='box'>
                            <div className='header'>
                                <h2>New Product</h2>
                            </div>
                            {
                                newProduct.map((curElm: Product) => {
                                    return (
                                        <div className='productbox' key={curElm.Name}>
                                            <div className='img-box'>
                                                <img src={curElm.images} alt=''></img>
                                            </div>
                                            <div className='detail'>
                                                <h3>{curElm.Name}</h3>
                                                <p>$ {curElm.price}</p>
                                                <div className='icon'>
                                                    <button><AiFillEye /></button>
                                                    <button><AiFillHeart /></button>
                                                    <button onClick={() => addtocart(curElm)}><AiOutlineShoppingCart /></button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='box'>
                            <div className='header'>
                                <h2>Featured Product</h2>
                            </div>
                            {
                                featuredProduct.map((curElm: Product) => {
                                    return (
                                        <div className='productbox' key={curElm.Name}>
                                            <div className='img-box'>
                                                <img src={curElm.images} alt=''></img>
                                            </div>
                                            <div className='detail'>
                                                <h3>{curElm.Name}</h3>
                                                <p>$ {curElm.price}</p>
                                                <div className='icon'>
                                                    <button><AiFillEye /></button>
                                                    <button><AiFillHeart /></button>
                                                    <button onClick={() => addtocart(curElm)}><AiOutlineShoppingCart /></button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='box'>
                            <div className='header'>
                                <h2>Top Product</h2>
                            </div>
                            {
                                topProduct.map((curElm: Product) => {
                                    return (
                                        <div className='productbox' key={curElm.Name}>
                                            <div className='img-box'>
                                                <img src={curElm.images} alt=''></img>
                                            </div>
                                            <div className='detail'>
                                                <h3>{curElm.Name}</h3>
                                                <p>$ {curElm.price}</p>
                                                <div className='icon'>
                                                    <button><AiFillEye /></button>
                                                    <button><AiFillHeart /></button>
                                                    <button onClick={() => addtocart(curElm)}><AiOutlineShoppingCart /></button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;