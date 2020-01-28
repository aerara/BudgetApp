import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './ProductDetails/user.service';


const appRoutes: Routes= [
  {path:'', component: HomePageComponent},
  {path:'notFound', component: ErrorComponent},
  {path:'admin', component: AdminLoginComponent},
  {path:'admin/dashboard', component: AdminDashboardComponent},
  {path:'products', component: ProductsComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'cart', component: CartComponent},
  {path:'home', component: HomePageComponent},
  {path: '**', redirectTo: '/notFound'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DashboardComponent,
    CartComponent,
    ProductsComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})

export class AppModule { }
