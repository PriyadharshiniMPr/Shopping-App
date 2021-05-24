import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingCartComponent } from 'src/app/componets/shopping-cart/shopping-cart.component';
import { LoginComponent } from '../app/componets/login/login.component';
import { RegisterComponent } from './componets/register/register.component';
import { PageNotFoundComponent } from '../app/componets/shared/page-not-found/page-not-found.component';
import { HomeComponent } from './componets/home/home.component';
import { AdminComponent } from './componets/admin/admin.component';
import { AuthGuard } from './helpers';
import { Role } from './models/role';
import { ExportComponent } from './componets/export/export.component';
import { ViewComponent } from './componets/shopping-cart/product-list/view/view.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component:  HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'shop', component: ShoppingCartComponent },
  { path: 'export', component: ExportComponent },
  { path: 'view', component: ViewComponent },
  { path: '**', component: PageNotFoundComponent },
  {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
