import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { Option } from '../models/option';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}
  storedCartItems?: CartItem[];

  addToCart(productModel: Product) {
    // var a: CartItem = JSON.parse(localStorage.getItem('CartItems'));

    // let itemIndex = CartItems.findIndex(
    //   (c) =>
    //     c.productModel.opt1.id === productModel.opt1.id &&
    //     c.productModel.opt2.id === productModel.opt2.id &&
    //     c.productModel.opt3.id === productModel.opt3.id &&
    //     c.productModel.opt4.id === productModel.opt4.id &&
    //     c.productModel.opt5.id === productModel.opt5.id &&
    //     c.productModel.opt6.id === productModel.opt6.id &&
    //     c.productModel.opt7.id === productModel.opt7.id &&
    //     c.productModel.opt8.id === productModel.opt8.id &&
    //     c.productModel.opt9.id === productModel.opt9.id &&
    //     c.productModel.opt10.id === productModel.opt10.id &&
    //     c.productModel.opt11.id === productModel.opt11.id &&
    //     c.productModel.opt12.id === productModel.opt12.id &&
    //     c.productModel.opt13.id === productModel.opt13.id &&
    //     c.productModel.opt14.id === productModel.opt14.id &&
    //     c.productModel.opt15.id === productModel.opt15.id &&
    //     c.productModel.opt16.id === productModel.opt16.id
    // );

    // if (itemIndex != -1) {
    //   CartItems[itemIndex].quantity += 1;
    //   localStorage.setItem('CartItems', JSON.stringify(CartItems));
    // } else {
    //   let cartItem = new CartItem();
    //   cartItem.productModel = productModel;
    //   cartItem.quantity = 1;
    //   CartItems.push(cartItem);
    //   localStorage.setItem('CartItems', JSON.stringify(CartItems));
    // }

    // localStorage.setItem('CartItems', JSON.stringify(CartItems));
  }

  removeFromCart(option: Option) {}

  list(): CartItem[] {
    this.storedCartItems = JSON.parse(localStorage.getItem('CartItems'));

    return this.storedCartItems;
  }
}
