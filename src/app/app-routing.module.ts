import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { ShopfooterComponent } from './shopfooter/shopfooter.component';
import { ShopnavComponent } from './shopnav/shopnav.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';


const routes: Routes = [
  { path: '', component:ShoppingcartComponent },
  {path:'checkout' ,component:CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
