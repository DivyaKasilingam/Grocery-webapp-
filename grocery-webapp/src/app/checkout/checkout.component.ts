import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  constructor(private cartService: CartService) {}

  onSubmit(): void {
    alert('Order has been placed successfully!');
    this.cartService.clearCart();
  }
}