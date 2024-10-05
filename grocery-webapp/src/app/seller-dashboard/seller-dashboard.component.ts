import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Product {
  id: number;
  name: string;
  stock: number;
}
@Component({
  selector: 'app-seller-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seller-dashboard.component.html',
  styleUrl: './seller-dashboard.component.css'
})
export class SellerDashboardComponent {
  products: Product[] = [
    { id: 1, name: 'Apples', stock: 50 },
    { id: 2, name: 'Oranges', stock: 30 }
  ];

}
