import React, { useEffect, useState } from 'react'
import '../styles/home.css'
import { Link } from 'react-router-dom'
import Homeproduct from '../comp/home_product'
import { FaEye, FaHeart } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { PiTiktokLogo } from "react-icons/pi";
import { AiOutlineYoutube } from "react-icons/ai";

interface Product {
    id: number;
    type: string;
    images: string;
    Name: string;
    price: string;
}

interface HomeProps {
    addtocart: (product: Product) => void;
}

const Home: React.FC<HomeProps> = ({ addtocart }) => {
    const [newProduct, setNewProduct] = useState<Product[]>([]);
    const [featuredProduct, setFeaturedProduct] = useState<Product[]>([]);
    const [topProduct, setTopProduct] = useState<Product[]>([]);
    const [trendingProduct, setTrendingproduct] = useState<Product[]>(Homeproduct);
    const [visibleProducts, setVisibleProducts] = useState<number>(12);

    const filtercate = (type: string) => {
        const filterproduct = Homeproduct.filter(curElm => curElm.type === type);
        setTrendingproduct(filterproduct);
        setVisibleProducts(12); // Resetovanje na početnih 12 proizvoda pri promeni filtera
    };

    const allTrendingProduct = () => {
        setTrendingproduct(Homeproduct);
        setVisibleProducts(12); // Resetovanje na početnih 12 proizvoda pri prikazu svih
    };

    useEffect(() => {
        productcategory();
    }, []);

    const productcategory = () => {
        const newcategory = Homeproduct.filter(x => x.type === 'new');
        setNewProduct(newcategory);

        const featuredcategory = Homeproduct.filter(x => x.type === 'featured');
        setFeaturedProduct(featuredcategory);

        const topcategory = Homeproduct.filter(x => x.type === 'top');
        setTopProduct(topcategory);
    };

    const handleShowMore = () => {
        setVisibleProducts(prev => prev + 12); // Povećanje broja prikazanih proizvoda za 12
    };

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
                                trendingProduct.slice(0, visibleProducts).map((curElm) =>
                                {
                                    return (
                                        <div className='box' key={curElm.id}>
                                            <div className='img_box'>
                                                <img src={curElm.images} alt='' />
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
                        {
                            visibleProducts < trendingProduct.length && (
                                <button onClick={handleShowMore}>Show More</button>
                            )
                        }
                    </div>
                </div>
                <div className='right_box'>
                    <div className='right_container'>
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
    </div>
    </>
  )
}

export default Home;
