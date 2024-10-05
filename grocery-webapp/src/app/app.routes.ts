import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ApplicationConfig } from '@angular/core';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'prod', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'seller', component: SellerDashboardComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes)]
  };
