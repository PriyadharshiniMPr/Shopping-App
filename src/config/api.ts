import { environment } from 'src/environments/environment';

export const basrUrl = environment.production ? 'https://api.shoppingcart.com' : 'http://localhost:3000'
export const productUrl = basrUrl + '/products'
export const cartUrl = basrUrl + '/cart'