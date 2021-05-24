import { Component, OnInit, Input } from '@angular/core';

import { Product } from 'src/app/models/product';
import { MessangerService } from 'src/app/services/messanger.service';
import { CartService } from 'src/app/services/cart.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product
  showcart = false;

  constructor(
    private msg:MessangerService,
    private cartService:CartService,
    private route: Router
    ) { }

  ngOnInit() {}

  handleAddToCart() {
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      this.msg.sendMsg(this.productItem)
    })   
  }

  viewDetails(product: any) {
    this.route.navigate(["/view"], { queryParams: { id: product.id, prize: product.price }});
  }
  

}
