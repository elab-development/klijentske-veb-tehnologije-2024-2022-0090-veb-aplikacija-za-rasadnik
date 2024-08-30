export class Product {
    id: number;
    name: string;
    price: string;
    images: string;
    cat: string;
    type: string;
  
    constructor(id: number, name: string, price: string, images: string, cat: string, type: string) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.images = images;
      this.cat = cat;
      this.type = type;
    }
  }
  
  export class ProductManager {
    private products: Product[];
  
    constructor(products: Product[] = []) {
      this.products = products;
    }
  
    addProduct(product: Product): void {
      this.products.push(product);
    }
  
    removeProductById(id: number): void {
      this.products = this.products.filter(product => product.id !== id);
    }
  
    getProductById(id: number): Product | undefined {
      return this.products.find(product => product.id === id);
    }
  
    getAllProducts(): Product[] {
      return this.products;
    }
  }