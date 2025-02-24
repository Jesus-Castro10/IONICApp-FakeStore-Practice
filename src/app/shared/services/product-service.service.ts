import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(environment.baseUrl)
  }

  getProduct(id: any) {
    return this.http.get(environment.baseUrl + "/" + id)
  }

  getCategories(name: string) {
    return this.http.get(environment.baseUrl + environment.categories + "/" + name)
  }
}
