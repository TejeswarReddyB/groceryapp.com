import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { RegisterComponent } from './components/register/register.component';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path:'register', component : RegisterComponent},
  {path:'login', component : LoginComponent},
  {path:'home', component : HomeComponent,canActivate:[AuthGuard]},
  {path:'about', component : AboutComponent, canActivate:[AuthGuard]},
  {path:'contact', component : ContactComponent, canActivate:[AuthGuard] },
  {path:'category/:catId', component : SubcategoryComponent},
  // {path:'subcategory/:subId', component : SubcategoryComponent},
  {path:'productDetails/:_id',component:ProductDetailComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
