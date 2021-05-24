import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { productUrl} from 'src/config/api';

import { Product } from 'src/app/models/product';

const apiUrl = "http://localhost:3000/products";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // products: Product[] = [
  //   new Product(1, 'Product 1', 'This is the product 1 description: this is really wonderfull product', 400, 'https://static.hopscotch.in/fstatic/product/201808/5b0ef4fa-2c30-4d20-bead-1c98fc9f206e_large.jpg?version=1534859594242&tr=w-480,c-at_max,n-normal'),
  //   new Product(2, 'Product 2', 'This is the product 2 description: this is really wonderfull product', 440,'https://i.pinimg.com/originals/6b/a3/d3/6ba3d3444ce1b9e90ee282d42b338116.jpg'),
  //   new Product(3, 'Product 3', 'This is the product 3 description: this is really wonderfull product', 500,'https://5.imimg.com/data5/GP/JY/MY-9580141/pink-flower-girl-wedding-dress-500x500.jpg'),
  //   new Product(4, 'Product 4', 'This is the product 4 description: this is really wonderfull product', 526,'https://i.pinimg.com/originals/13/0a/c1/130ac14f730931b7cd5b0299562d9bc7.jpg'),
  //   new Product(5, 'Product 5', 'This is the product 5 description: this is really wonderfull product', 895,'https://hunyhuny.com/3131-large_default/dress-tees-top-pant-cap-newborn-infant-toddler-blue-sleeveless.jpg'),
  //   new Product(6, 'Product 6', 'This is the product 6 description: this is really wonderfull product', 812,'https://hunyhuny.com/3430-large_default/top-pant-skirt-style-dress-newborn-infant-toddler-maroon-white-sleeveless.jpg')
  // ]

  constructor(private http:HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(productUrl);
  }
}
