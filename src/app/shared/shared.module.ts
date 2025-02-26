import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ProductService } from './services/product-service.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderSearchbarComponent } from './components/header-searchbar/header-searchbar.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';

const COMPONENTS = [HeaderSearchbarComponent, CardComponent, FooterComponent]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    ...COMPONENTS
  ],
  providers: [
    ProductService
  ]
})
export class SharedModule { }
