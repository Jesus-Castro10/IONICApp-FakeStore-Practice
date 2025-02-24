import { NgModule } from '@angular/core';

import { DetailProductPageRoutingModule } from './detail-product-routing.module';

import { DetailProductPage } from './detail-product.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardProductComponent } from 'src/app/shared/components/card-product/card-product.component';

@NgModule({
  imports: [
    DetailProductPageRoutingModule,
    SharedModule
  ],
  declarations: [DetailProductPage]
})
export class DetailProductPageModule { }
