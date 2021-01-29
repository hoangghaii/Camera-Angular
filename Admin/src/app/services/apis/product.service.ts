import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { HttpService } from '../http.service';
import { Product } from 'src/app/models';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends HttpService {
  apiUrl = env.BASE_URL;

  constructor(private http: HttpClient) {
    super();
  }

  /**
   *
   * @param categoryCd
   */
  getProductList(): Observable<any[]> {
    const url = this.apiUrl + `product`;
    return this.http.get<any[]>(url).pipe(
      map((res: any) => {
        if (res) {
          return res;
        }
      }),
      catchError((e) => {
        return this.handleError(e);
      })
    );
  }

  /**
   *
   * @param productId
   */
  getProduct(productId: any): Observable<Product[]> {
    const url = this.apiUrl + `product/${productId}`;
    return this.http.get<Product[]>(url).pipe(
      map((res: any) => {
        if (res) {
          return res;
        }
      }),
      catchError((e) => {
        return this.handleError(e);
      })
    );
  }

  /**
   *
   * @param objProduct
   */
  createProduct(objProduct: Product): Observable<Product[]> {
    const url = this.apiUrl + `product`;
    const headers = new HttpHeaders();
    const formData = new FormData();
    formData.append('name', objProduct.name);
    formData.append('image', objProduct.image);
    formData.append(
      'category_product_id',
      objProduct.category_product_id.toString()
    );
    formData.append('description', objProduct.description);
    formData.append('price', objProduct.price.toString());
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    return this.http
      .post<Product[]>(url, formData, { headers: headers })
      .pipe(
        map((res: any) => {
          if (res) {
            return res;
          }
        }),
        catchError((e) => {
          return this.handleError(e);
        })
      );
  }

  /**
   *
   * @param objProduct
   */
  updateProduct(objProduct: Product): Observable<Product[]> {
    const url = this.apiUrl + `productUpdate`;
    const headers = new HttpHeaders();
    const formData = new FormData();
    formData.append('id', objProduct.id.toString());
    formData.append('name', objProduct.name);
    formData.append('image', objProduct.image);
    formData.append(
      'category_product_id',
      objProduct.category_product_id.toString()
    );
    formData.append('description', objProduct.description);
    formData.append('price', objProduct.price.toString());
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    return this.http
      .post<Product[]>(url, formData, { headers: headers })
      .pipe(
        catchError((e) => {
          return this.handleError(e);
        })
      );
  }

  deleteProduct(productId: any): Observable<any> {
    const url = this.apiUrl + `product/${productId}`;
    return this.http.delete(url).pipe(
      catchError((e) => {
        return this.handleError(e);
      })
    );
  }
}
