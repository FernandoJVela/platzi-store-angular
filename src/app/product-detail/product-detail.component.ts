import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../core/services/products/products.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IProduct } from '../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: IProduct;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.product = this.productService.getProduct(params.id);
      console.log(this.product);
    });
  }

}
