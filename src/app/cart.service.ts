import { Product } from './products';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  
  items: Product[] = new Array();

  constructor(
    private http: HttpClient
  ) {}
  

  //add items to cart
  addItems(product: Product) {
    return this.items.push(product);
  }
  //return cart items
  getItems() {
    return this.items;
  }
  //clear cart items
  clearItems() {
    this.items = []; //set to empty first
    return this.items;
  }

  //return shipping prices
  getShippingPrices(){
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

}
