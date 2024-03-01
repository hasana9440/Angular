import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [
   
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ProductComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ContactComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule

  ]
})
export class PagesModule { }
