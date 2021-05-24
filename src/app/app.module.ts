import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { fakeBackendProvider } from 'src/app/helpers/fake-backend';
import { JwtInterceptor, ErrorInterceptor} from './helpers';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componets/shared/header/header.component';
import { FooterComponent } from './componets/shared/footer/footer.component';
import { NavComponent } from './componets/shared/nav/nav.component';
import { ShoppingCartComponent } from './componets/shopping-cart/shopping-cart.component';
import { FiltersComponent } from './componets/shopping-cart/filters/filters.component';
import { ProductListComponent } from './componets/shopping-cart/product-list/product-list.component';
import { CartComponent } from './componets/shopping-cart/cart/cart.component';
import { CartItemComponent } from './componets/shopping-cart/cart-item/cart-item.component';
import { ProductItemComponent } from './componets/shopping-cart/product-list/product-item/product-item.component';
import { LoginComponent } from './componets/login/login.component';
import { RegisterComponent } from './componets/register/register.component';
import { PageNotFoundComponent } from './componets/shared/page-not-found/page-not-found.component';
import { HomeComponent } from './componets/home/home.component';
import { AlertComponent } from './componets/alert/alert.component';
import { AdminComponent } from './componets/admin/admin.component';
import { ExportComponent } from './componets/export/export.component';
import { ViewComponent } from './componets/shopping-cart/product-list/view/view.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    FiltersComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    HomeComponent,
    AlertComponent,
    AdminComponent,
    ExportComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
],
bootstrap: [AppComponent]
})
export class AppModule { }
