import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../core/services/products/products.service';
import { IProduct } from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: IProduct[];
  constructor(
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }

  clickProduct(id: number): void {
    console.log('Product: ' + id);
  }
}
