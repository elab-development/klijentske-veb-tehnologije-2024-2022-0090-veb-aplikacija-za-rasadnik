import './productFilter.css';

interface Product {
  cat: string;
  type: string;
  price: string;
}

class ProductFilter {
  private products: Product[];

  constructor(products: Product[]) {
    this.products = products; // Lista svih proizvoda
  }

  // Metoda za filtriranje po kategoriji
  filterByCategory(category: string): Product[] {
    return this.products.filter(product => product.cat === category);
  }

  // Metoda za filtriranje po tipu
  filterByType(type: string): Product[] {
    return this.products.filter(product => product.type === type);
  }

  // Metoda za filtriranje po opsegu cena (min i max cena)
  filterByPriceRange(minPrice: number, maxPrice: number): Product[] {
    return this.products.filter(product => {
      const price = parseFloat(product.price.replace(' RSD', '').replace('.', ''));
      return price >= minPrice && price <= maxPrice;
    });
  }

  // Metoda za resetovanje filtera (vrati sve proizvode)
  resetFilters(): Product[] {
    return this.products;
  }
}

export default ProductFilter;