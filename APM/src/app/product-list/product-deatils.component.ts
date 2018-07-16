import { Component, OnInit } from '@angular/core';
import { Iproduct } from './product';
import {ActivatedRoute, Router} from '@angular/router';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-deatils.component.html',
  styleUrls: ['./product-deatils.component.css']
})
export class ProductDeatilsComponent implements OnInit {

  pageTitle: string = 'Product Detail: ';
  errorMessage: string;

  product: Iproduct;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _productService: ProductService) { }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    console.log('passing ID is: ' + id);
    this.pageTitle += `${id}`;   
    this.getProduct(id);
  }
  getProduct(id: number) {
    this._productService.getProduct(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
      this._router.navigate(['/products']);
  }

}
