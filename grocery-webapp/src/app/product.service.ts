import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Apple', description: 'Fresh apples', price: 1.2, stock: 100 },
    { id: 2, name: 'Banana', description: 'Fresh bananas', price: 0.5, stock: 150 },
    { id: 3, name: 'Orange', description: 'Fresh oranges', price: 1.5, stock: 120 },
    { id: 4, name: 'Milk', description: 'Fresh Milk', price: 1.2 , stock: 150},
    { id: 5, name: 'Bread', description: 'Fresh Breads', price: 0.8 , stock: 150},
    { id: 5, name: 'Chicken', description: 'Fresh Breads', price: 0.8 , stock: 150},
    { id: 5, name: 'Meat', description: 'Fresh Breads', price: 0.8 , stock: 150},
    { id: 5, name: 'Brinjal', description: 'Fresh Breads', price: 0.8 , stock: 150},
    { id: 5, name: 'Cinnamon', description: 'Fresh Breads', price: 0.8 , stock: 150},
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}
