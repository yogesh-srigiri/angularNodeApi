import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductGetComponent } from './product-get/product-get.component';


const routes: Routes = [
  {path: 'product/create', component: ProductAddComponent},
  {path: 'edit/:id', component: ProductEditComponent},
  {path: 'products', component: ProductGetComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ],
  exports: [RouterModule]
})






export class AppRoutingModule { }
