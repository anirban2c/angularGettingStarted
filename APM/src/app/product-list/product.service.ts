import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { Iproduct } from './product';

@Injectable()
export class ProductService {
    private _productUrl = './api/products/products.json';

    constructor(private _http: HttpClient) { }

    // getProducts(): Observable<Iproduct[]> {
    //     return this._http.get<Iproduct[]>(this._productUrl)
    //         .do(data => console.log('All: ' + JSON.stringify(data)))
    //         .catch(this.handleError);
    // }

    getProducts(): Observable<Iproduct[]> {
        return this._http.get<Iproduct[]>(this._productUrl)
                .do(data => console.log('All: ' + JSON.stringify(data)))
                .catch(this.handleError);

    }

    getProduct(id: number): Observable<Iproduct> {
        return this.getProducts()
            .map((products: Iproduct[]) => products.find(p => p.productId === id));

        //return this._http.get<Iproduct>(`./api/products/${id}`);
    }

    findProductByID(products: Iproduct[],id): Iproduct {
          return products.find(p => p.productId === id);
    }

    private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return Observable.throw(errorMessage);
    }
}