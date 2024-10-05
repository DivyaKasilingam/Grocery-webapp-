import { Injectable } from '@angular/core';
import { Product } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Product[] = [];

  addToCart(product: Product): void {
    this.cart.push(product);
  }

  getCartItems(): Product[] {
    return this.cart;
  }

  clearCart(): void {
    this.cart = [];
  }
}
