import { Component, OnInit } from '@angular/core';
import { Iproduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  _listFilter: string;
  errorMessage: string;
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string){
    this._listFilter = value;
    this.filterListProducts = this.listFilter? this.performFilter(this.listFilter) : this.products;

  }
  
  filterListProducts: Iproduct[];
  products: Iproduct[];
  
  constructor(private _productService : ProductService){
    //this.listFilter = 'Cart';
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    //console.log('In ngOnInit method');
    this._productService.getProducts()
                        .subscribe(data => {
                                   this.products = data;
                                   this.filterListProducts = this.products;
                                   },
                                   error => this.errorMessage = <any>error);
    //this.filterListProducts = this.products;
   
  }

  performFilter(filterText: string) : Iproduct[] {
    filterText = filterText.toLocaleLowerCase();
    return this.products.filter((product:Iproduct) =>
          product.productName.toLocaleLowerCase().indexOf(filterText) !== -1);
  }

  onRatingClicked(message: string):void {
     this.pageTitle = this.pageTitle + '-' + message;
  }
}
