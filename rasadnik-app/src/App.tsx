import React, { useState, useEffect, FC } from 'react';
import Nav from './comp/nav';
import { BrowserRouter } from 'react-router-dom';
import Rout from './comp/rout';
import Footer from './comp/footer';
import Homeproduct from './comp/home_product';
import ProductFilter from './comp/productFilter';
import './pagination.css';
//import  Product  from './comp/productFilter';

const App: FC = () => {
  const [cart, setCart] = useState<{ id: string; images: string; Name: string; price: number; qty: number; }[]>([]);
  const [shop, setShop] = useState<typeof Homeproduct>(Homeproduct);
  const [search, setSearch] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage] = useState<number>(3);

  const Filter = (x: string) => {
    const cateFilter = Homeproduct.filter((product) => product.cat === x);
    setShop(cateFilter);
  };

  const allcatefilter = () => {
    setShop(Homeproduct);
  };

  const searchlenght = (search || []).length === 0;
  const searchproduct = () => {
    if (searchlenght) {
      alert("Please Search Something!");
      setShop(Homeproduct);
    } else {
      const searchfilter = Homeproduct.filter((x) => x.cat === search);
      setShop(searchfilter);
    }
  };

  const addtocart = (product: { id: string; images: string; Name: string; price: number; }) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      alert("This product is already added in cart");
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      alert("Added to cart");
    }
  };

  const [filteredProducts, setFilteredProducts] = useState<typeof Homeproduct>(Homeproduct);
  const productFilter = new ProductFilter(Homeproduct);

  const filterByCategory = (category: string) => {
    const filtered = productFilter.filterByCategory(category) as { id: number; Name: string; price: string; images: string; cat: string; type: string; }[];
    setFilteredProducts(filtered);
  };

  const filterByType = (type: string) => {
    const filtered = productFilter.filterByType(type)as { id: number; Name: string; price: string; images: string; cat: string; type: string; }[];
    setFilteredProducts(filtered);
  };

  const filterByPriceRange = (minPrice: number, maxPrice: number) => {
    const filtered = productFilter.filterByPriceRange(minPrice, maxPrice)as { id: number; Name: string; price: string; images: string; cat: string; type: string; }[];
    setFilteredProducts(filtered);
  };

  const resetFilters = () => {
   // setFilteredProducts(productFilter.resetFilters());
   // setCategory('');
   // setType('');
    //setMinPrice('');
   // setMaxPrice('');
   const resetProducts = productFilter.resetFilters() as Product[];
   setFilteredProducts(resetProducts);
   setCategory('');
   setType('');
   setMinPrice('');
   setMaxPrice('');
  };

  const handleApplyFilters = () => {
    filterByCategory(category);
    filterByType(type);
    filterByPriceRange(parseFloat(minPrice) || 0, parseFloat(maxPrice) || Infinity);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const categories: string[] = [...new Set(Homeproduct.map(product => product.cat))];
  const types: string[] = [...new Set(Homeproduct.map(product => product.type))];

  const indexOfLastProduct: number = currentPage * productsPerPage;
  const indexOfFirstProduct: number = indexOfLastProduct - productsPerPage;
  const currentProducts: typeof Homeproduct = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages: number = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <>
      <BrowserRouter>
        <Nav search={search} setSearch={setSearch} searchproduct={searchproduct} />
        <Rout setCart={setCart} cart={cart} shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart} />
        <div className="filter-section">
          <h3>Filteri:</h3>
          <div>
            <label>Kategorija:</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">Sve Kategorije</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Tip:</label>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="">Svi Tipovi</option>
              {types.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Minimalna Cena:</label>
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              placeholder="Minimalna Cena"
            />
          </div>
          <div>
            <label>Maximalna Cena:</label>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder="Maximalna Cena"
            />
          </div>
          <div>
            <button onClick={handleApplyFilters}>Primeni Filtere</button>
            <button onClick={resetFilters}>Resetuj Filtere</button>
          </div>
        </div>
        <div>
          <h2>Proizvodi:</h2>
          <ul>
            {currentProducts.map(product => (
              <li key={product.id} className="product-item">
                <img src={product.images} alt={product.Name} />
                <div>
                  <h4>{product.Name}</h4>
                  <p>{product.price}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;