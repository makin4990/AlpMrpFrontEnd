import { Component, DoCheck, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cartItem';
import { CartItems} from 'src/app/models/cartItems'
import { Option } from 'src/app/models/option';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/models/cart';
import { BasketService } from 'src/app/services/basket.service';


@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css'],
})
export class CartSummaryComponent implements OnInit, DoCheck {
  cartItems: CartItem[] = [];
  apicart: Cart;
  //crt: Cart;
  crt = new Cart;
  panelOpenState = false;


  constructor(private cartService: CartService, private basketService: BasketService, private toastrService: ToastrService) {

    
   }
  
  ngDoCheck() {
    this.getCart();
   
    
  }
  ngOnInit(): void {
    this.getCartDb();
    
    this.getCartFromDb();
    
    this.getCartDb();
    //console.log(this.crt.id+" bu cartın id si")
  }

  getCart() {
    
    this.cartItems = this.cartService.list();
    return this.cartItems;
    
  }

  removeFromCart(productModel:Product){
    // this.cartService.removeFromCart(productModel);
    // this.toastrService.error("sepetten silindi.")
  }

  async getCartFromDb() {
    
    // this.crt = await this.basketService.getbasket().toPromise();
    // this.crt
    // return this.crt;
    
    
  }

   getCartDb() {
    
     return this.basketService.getbasket2().subscribe((response) => {
       this.crt= response[0]
       console.log(this.crt)
     });
    
    
  }
}