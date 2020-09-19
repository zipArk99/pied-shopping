import { BrowserModule } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';

enableProdMode();
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopheaderComponent } from './shopheader/shopheader.component';
import { ShopfooterComponent } from './shopfooter/shopfooter.component';
import { ShopnavComponent } from './shopnav/shopnav.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FiltersComponent } from './shoppingcart/filters/filters.component';
import { ProductsComponent } from './shoppingcart/products/products.component';
import { CartComponent } from './shoppingcart/cart/cart.component';
import { CartListComponent } from './shoppingcart/cart/cart-list/cart-list.component';
import { ProductitemComponent } from './shoppingcart/products/productitem/productitem.component';
import { CheckoutComponent } from './checkout/checkout.component';


@NgModule({
  declarations: [
    AppComponent,
    ShopheaderComponent,
    ShopfooterComponent,
    ShopnavComponent,
    ShoppingcartComponent,
    FiltersComponent,
    ProductsComponent,
    CartComponent,
    CartListComponent,
    ProductitemComponent,
    CheckoutComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
