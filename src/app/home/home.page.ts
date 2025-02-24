import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/services/product-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {

  products: any[] = [];

  constructor(private service: ProductService) { }

  ngOnInit() {
    this.getProducts()
  }

  getProducts() {
    this.service.getProducts().subscribe({
      next: (rest: any) => {
        this.products.push(...rest)
        console.log(this.products);
      },
      error: (error: any) => { }
    })
  }
}
