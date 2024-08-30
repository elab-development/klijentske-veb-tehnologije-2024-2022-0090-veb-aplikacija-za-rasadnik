import './productFilter.css'
class ProductFilter {
    constructor(products) {
      this.products = products; // Lista svih proizvoda
    }
  
    // Metoda za filtriranje po kategoriji
    filterByCategory(category) {
      return this.products.filter(product => product.cat === category);
    }
  
    // Metoda za filtriranje po tipu
    filterByType(type) {
      return this.products.filter(product => product.type === type);
    }
  
    // Metoda za filtriranje po opsegu cena (min i max cena)
    filterByPriceRange(minPrice, maxPrice) {
      return this.products.filter(product => {
        const price = parseFloat(product.price.replace(' RSD', '').replace('.', ''));
        return price >= minPrice && price <= maxPrice;
      });
    }
  
    // Metoda za resetovanje filtera (vrati sve proizvode)
    resetFilters() {
      return this.products;
    }
  }
  
  export default ProductFilter;