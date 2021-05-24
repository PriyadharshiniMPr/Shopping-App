import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-Item';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessangerService } from 'src/app/services/messanger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
    // { id: 1, productId:1, productname:'Test1', qty:4, price:140 },
    // { id: 2, productId:2, productname:'Test2', qty:5, price:100 },
    // { id: 3, productId:3, productname:'Test3', qty:3, price:130 },
    // { id: 4, productId:4, productname:'Test4', qty:2, price:120 },
  ];


  cartTotal = 0

  constructor(
    private msg: MessangerService,
    private cartService: CartService
    ) { }

  ngOnInit() {
    this.handleSubscription();
    this.loadCartItems();
  }

  handleSubscription() {
    this.msg.getMsg().subscribe((product: Product) => {
      this.loadCartItems();
    })
  }

  loadCartItems(){
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.calcCartTotal();
    })
  }

  calcCartTotal() {
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }

}
