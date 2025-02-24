import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ProductService } from './services/product-service.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule
  ],
  providers: [
    ProductService
  ]
})
export class SharedModule { }
