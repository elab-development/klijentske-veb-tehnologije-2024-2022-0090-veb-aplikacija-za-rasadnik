import React, { useState, useEffect } from 'react';
import Nav from './comp/nav';
import { BrowserRouter } from 'react-router-dom';
import Rout from './comp/rout';
import Footer from './comp/footer';
import Homeproduct from './comp/home_product';
import ProductFilter from './comp/productFilter';
import './pagination.css'

const App = () => {
  const [cart, setCart] = useState([]);
  const [shop, setShop] = useState(Homeproduct);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(3);

  const Filter = (x) => {
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

  const addtocart = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      alert("This product is already added in cart");
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      alert("Added to cart");
    }
  };

  const [filteredProducts, setFilteredProducts] = useState(Homeproduct);
  const productFilter = new ProductFilter(Homeproduct);

  const filterByCategory = (category) => {
    const filtered = productFilter.filterByCategory(category);
    setFilteredProducts(filtered);
  };

  const filterByType = (type) => {
    const filtered = productFilter.filterByType(type);
    setFilteredProducts(filtered);
  };

  const filterByPriceRange = (minPrice, maxPrice) => {
    const filtered = productFilter.filterByPriceRange(minPrice, maxPrice);
    setFilteredProducts(filtered);
  };

  const resetFilters = () => {
    setFilteredProducts(productFilter.resetFilters());
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

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const categories = [...new Set(Homeproduct.map(product => product.cat))];
  const types = [...new Set(Homeproduct.map(product => product.type))];

  // Calculate the index of the first product on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

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