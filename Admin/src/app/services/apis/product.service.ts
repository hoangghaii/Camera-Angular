import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { HttpService } from '../http.service';
import { Product } from 'src/app/models';

Product;

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
  getProductList(): Observable<Product[]> {
    const url = this.apiUrl + `product`;
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
   * @param shopId
   * @param skillId
   */
  getSkill(shopId: string, skillId: string): Observable<Product[]> {
    const url = this.apiUrl + `shops/${shopId}/skills/${skillId}`;
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
   * @param shopId
   * @param objProduct
   */
  createSkill(shopId: string, objProduct: Product): Observable<Product[]> {
    const url = this.apiUrl + `shops/${shopId}/skills`;
    return this.http.post<Product[]>(url, objProduct).pipe(
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
   * @param shopId
   * @param classId
   * @param objProduct
   */
  updateSkill(
    shopId: string,
    classId: string,
    objProduct: Product
  ): Observable<Product[]> {
    const url = this.apiUrl + `shops/${shopId}/skills/${classId}`;
    return this.http.put<Product[]>(url, objProduct).pipe(
      catchError((e) => {
        return this.handleError(e);
      })
    );
  }
}
