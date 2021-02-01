import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { HttpService } from '../http.service';
import { ProductType } from 'src/app/models';
@Injectable({
  providedIn: 'root',
})
export class ProductTypeService extends HttpService {
  apiUrl = env.BASE_URL;

  constructor(private http: HttpClient) {
    super();
  }

  getProductTypeList(): Observable<any> {
    const url = this.apiUrl + `category_product`;
    return this.http.get<any>(url).pipe(
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

  getProductType(productTypeId: any): Observable<ProductType[]> {
    const url = this.apiUrl + `category_product/${productTypeId}`;
    return this.http.get<ProductType[]>(url).pipe(
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

  createProductType(objProductType: ProductType): Observable<ProductType[]> {
    const url = this.apiUrl + `category_product`;

    return this.http.post<ProductType[]>(url, objProductType).pipe(
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

  updateProductType(
    objProductType: ProductType,
    productTypeId: any
  ): Observable<ProductType[]> {
    const url = this.apiUrl + `category_product/${productTypeId}`;

    return this.http.put<ProductType[]>(url, objProductType).pipe(
      catchError((e) => {
        return this.handleError(e);
      })
    );
  }

  deleteProductType(productTypeId: any): Observable<any> {
    const url = this.apiUrl + `category_product/${productTypeId}`;
    return this.http.delete(url).pipe(
      catchError((e) => {
        return this.handleError(e);
      })
    );
  }
}
