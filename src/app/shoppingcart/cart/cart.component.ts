import { Products } from './../../models/products';
import { Component, OnInit } from '@angular/core';
import { MessService} from "src/app/service/mess.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];
  cartTotalo=0;
  spark:any;
  constructor (private message:MessService){

  };

  ngOnInit(){
    this.message.fetchmessage().subscribe((products:Products)=>{

      this.cart78(products)
     
    })
   
  }
  cart78(products:Products){
    
    let check=false;

    for(let init in this.cartItems)
    {
      if(this.cartItems[init].id === products.id)
      {
        this.cartItems[init].quantity++;
        check=true;
        break;
      }
    }

    if(!check)
    {
      this.cartItems.push({
        id: products.id,
        name: products.name,
        quantity: 1,
        price: products.price,
      })
    }

    this.cartTotalo = 0
    this.cartItems.forEach(items => {
      this.cartTotalo += (items.quantity * items.price)

    })

  }

}



