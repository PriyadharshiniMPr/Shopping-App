import { Product } from './product';

export class CartItem {
    id: number;
    productId: number;
    productname: string;
    qty: number;
    price: number;

    constructor(id:number , product: Product, qty=1){
        this.id = id;
        this.productId = product.id;
        this.productname = product.name;
        this.price = product.price;
        this.qty = qty;
    }
   
}
