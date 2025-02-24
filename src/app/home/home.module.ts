import { NgModule } from '@angular/core';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CardProductComponent } from '../shared/components/card-product/card-product.component';

@NgModule({
  imports: [
    HomePageRoutingModule,
    SharedModule
  ],
  declarations: [HomePage, CardProductComponent]
})
export class HomePageModule { }
