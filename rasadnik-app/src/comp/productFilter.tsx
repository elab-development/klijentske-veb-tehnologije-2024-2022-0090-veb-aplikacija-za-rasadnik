import './productFilter.css'
class ProductFilter {
  products:any;
    constructor(products:any) {
      this.products = products; // Lista svih proizvoda
    }
  
    // Metoda za filtriranje po kategoriji
    filterByCategory(category:any) {
      return this.products.filter((product:any) => product.cat === category);
    }
  
    // Metoda za filtriranje po tipu
    filterByType(type:any) {
      return this.products.filter((product:any) => product.type === type);
    }
  
    // Metoda za filtriranje po opsegu cena (min i max cena)
    filterByPriceRange(minPrice:any, maxPrice:any) {
      return this.products.filter((product:any) => {
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