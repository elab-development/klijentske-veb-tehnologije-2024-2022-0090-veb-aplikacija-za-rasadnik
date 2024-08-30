import React, { useState, FC } from 'react';
import './shop.css';
import { AiFillHeart, AiFillEye, AiOutlineClose } from 'react-icons/ai';
import React, { useState } from 'react';
import { Product, ProductManager } from './classes/ProductManager';

interface Product {
    images: string;
    cat: string;
    Name: string;
    price: string;
}

interface ShopProps {
    shop: Product[];
    Filter: (category: string) => void;
    allcatefilter: () => void;
    addtocart: (product: Product) => void;
}

const Shop: FC<ShopProps> = ({ shop, Filter, allcatefilter, addtocart }) => {
    const [showDetail, setShowDetail] = useState<boolean>(false);
    const [detail, setDetail] = useState<Product | null>(null);

    const detailpage = (product: Product): void => {
        setDetail(product);
        setShowDetail(true);
    };

    const closedetail = (): void => {
        setShowDetail(false);
    };

    return (
        <>
            {showDetail ? (
                <>
                    <div className='product_detail'>
                        <button className='close_btn' onClick={closedetail}><AiOutlineClose /></button>
                        <div className='container'>
                            <div className='img_box'>
                                <img src={detail?.images} alt=''></img>
                            </div>
                            <div className='info'>
                                <h4># {detail?.cat}</h4>
                                <h2>{detail?.Name}</h2>
                                <p>NEKI TEKST</p>
                                <h3>{detail?.price} RSD</h3>
                                <button onClick={() => addtocart(detail!)}>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}

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
                                    <li onClick={() => allcatefilter()}># All</li>
                                    <li onClick={() => Filter("Saksijsko cveće")}># Saksijsko cveće</li>
                                    <li onClick={() => Filter("Žive ograde")}># Žive ograde</li>
                                    <li onClick={() => Filter("Ruže")}># Ruže</li>
                                    <li onClick={() => Filter("Drveće")}># Drveće</li>
                                    <li onClick={() => Filter("Čuvarkuće")}># Čuvarkuće</li>
                                    <li onClick={() => Filter("Četinari")}># Četinari</li>
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
                                {shop.map((curElm: Product) => {
                                    return (
                                        <div className='box' key={curElm.Name}>
                                            <div className='img_box'>
                                                <img src={curElm.images} alt=''></img>
                                                <div className='icon'>
                                                    <li><AiFillHeart /></li>
                                                    <li onClick={() => detailpage(curElm)}><AiFillEye /></li>
                                                </div>
                                            </div>
                                            <div className='detail'>
                                                <h3>{curElm.Name}</h3>
                                                <p>{curElm.price}</p>
                                                <button onClick={() => addtocart(curElm)}>Add to cart</button>
                                            </div>
                                        </div>
                                    );
                                })}
                                <div className='box'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const Shop: React.FC = () => {
    const initialProducts = [
      new Product(1, 'Kaktus Grusoni S1', '10.000 RSD', 'images/img1.webp', 'Saksijsko cvece', 'new'),
      // Ostali proizvodi...
    ];
  
    const productManager = new ProductManager(initialProducts);
  
    const allProducts = productManager.getAllProducts();
  
    return (
      <div>
        <h1>Shop</h1>
        <ul>
          {allProducts.map(product => (
            <li key={product.id}>
              {product.name} - {product.price}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  


export default Shop;