import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import {AddRestaurantComponent} from './add-restaurant/add-restaurant.component';
import {ListRestaurantComponent} from './list-restaurant/list-restaurant.component'
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {UpdateRestaurantComponent} from './update-restaurant/update-restaurant.component';


const routes: Routes = [
  {
    component:AddRestaurantComponent,
    path:'add'
  },
  {
    component:ListRestaurantComponent,
    path:'list'
  },
  {
    component:LoginComponent,
    path:'login'

  },
  {
    component:RegisterComponent,
    path:'register'

  },
  {
    component:UpdateRestaurantComponent,
    path:'update'

  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
