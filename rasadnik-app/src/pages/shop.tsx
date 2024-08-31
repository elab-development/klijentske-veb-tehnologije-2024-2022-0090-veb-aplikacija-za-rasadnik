import React, { useState } from 'react'
import '../styles/shop.css'
import { AiFillHeart, AiFillEye, AiOutlineClose } from 'react-icons/ai';
//import { MdCrueltyFree } from 'react-icons/md'
//import { FiFilter } from 'react-icons/fi';


// Definicija interfejsa za Product
interface Product {
    id: number;
    Name: string;
    price: string;
    images: string;
    cat: string;
    type: string;
  }
  
  // Definicija interfejsa za props komponente Shop
  interface ShopProps {
    shop: Product[];
    Filter: (category: string) => void;
    allcatefilter: () => void;
    addtocart: (product: Product) => void;
  }
  
  const Shop: React.FC<ShopProps> = ({ shop, Filter, allcatefilter, addtocart }) => {
    const [showDetail, setShowDetail] = useState<boolean>(false);
    const [detail, setDetail] = useState<Product | null>(null);
  
    const detailpage = (product: Product) => {
      setDetail(product);
      setShowDetail(true);
    };
  
    const closedetail = () => {
        setShowDetail(false);
        setDetail(null); // Resetujemo detail na null
      };
    
      return (
        <>
          {showDetail && detail && (
            <div className='product_detail'>
              <button className='close_btn' onClick={closedetail}><AiOutlineClose /></button>
              <div className='container'>
                <div className='img_box'>
                  <img src={detail.images} alt={detail.Name} />
                </div>
                <div className='info'>
                  <h4># {detail.cat}</h4>
                  <h2>{detail.Name}</h2>
                  <p>NEKI TEKST</p>
                  <h3>{detail.price} RSD</h3>
                  <button onClick={() => addtocart(detail)}>Add To Cart</button>
                </div>
              </div>
            </div>
          )}
    
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
                      <li onClick={() => Filter("Saksijsko cvece")}># Saksijsko cveće</li>
                      <li onClick={() => Filter("Žive ograde")}># Žive ograde</li>
                      <li onClick={() => Filter("Ruže")}># Ruže</li>
                      <li onClick={() => Filter("Drveće")}># Drveće</li>
                      <li onClick={() => Filter("Čuvarkuće")}># Čuvarkuće</li>
                      <li onClick={() => Filter("Zamia")}># Zamia</li>
                    </ul>
                  </div>
                </div>
                <div className='banner'>
                  <div className='img_box'>
                    <img src='images/sale20.jpg' alt='Banner' />
                  </div>
                </div>
              </div>
              <div className='right_box'>
                <div className='banner'>
                  <div className='img_box'>
                    <img src='images/coverSale.jpg' alt='Banner' />
                  </div>
                </div>
                <div className='product_box'>
                  <h2>Shop Product</h2>
                  <div className='product_container'>
                    {shop.map((curElm) => (
                      <div className='box' key={curElm.id}>
                        <div className='img_box'>
                          <img src={curElm.images} alt={curElm.Name} />
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
                    ))}
                    <div className='box'>
                      {/* Prazna kutija može se koristiti za neki drugi sadržaj */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    };
    
    export default Shop;