import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../models/cart';
import { Product } from '../models/product';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  apiUrl = 'https://localhost:5001/api/carts/';
  cartUrl = 'https://localhost:5001/weatherforecast';

  constructor(private httpClient: HttpClient) {}

  getbasket(): Observable<Cart> {
    // return this.htppClient.get<SingleResponseModel<Cart>>(
    //   this.apiUrl + 'getusercart?userid=' + userId
    return this.httpClient.get<Cart>(this.cartUrl);
  }

  getbasket2(): Observable<Cart[]> {
    return this.httpClient.get<Cart[]>(this.cartUrl);
  }

  addProduct(product: Product) {
    product.cartId = 36;
    return this.httpClient.post<SingleResponseModel<Product>>(
      this.apiUrl + 'addproduct',
      product
    );
  }

  updateProductQuantity(product: Product) {
    product.cartId = 36;
    return this.httpClient.post<SingleResponseModel<Product>>(
      this.apiUrl + 'update',
      product
    );
  }
}
