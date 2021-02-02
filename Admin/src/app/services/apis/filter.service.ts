import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { HttpService } from '../http.service';
import { Filter } from 'src/app/models';

@Injectable({
  providedIn: 'root',
})
export class FilterService extends HttpService {
  apiUrl = env.BASE_URL;

  constructor(private http: HttpClient) {
    super();
  }

  /**
   *
   * @param categoryCd
   */
  getFilterList(): Observable<any[]> {
    const url = this.apiUrl + `filter`;
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
   * @param filtertId
   */
  getFilter(filtertId: any): Observable<any> {
    const url = this.apiUrl + `filter/${filtertId}`;
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

  /**
   *
   * @param objFilter
   */
  createFilter(objFilter: Filter): Observable<Filter[]> {
    const url = this.apiUrl + `filter`;

    return this.http.post<Filter[]>(url, objFilter).pipe(
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
   * @param objFilter
   */
  updateFilter(objFilter: Filter, filtertId: any): Observable<Filter[]> {
    const url = this.apiUrl + `filter/${filtertId}`;
    return this.http.put<Filter[]>(url, objFilter).pipe(
      catchError((e) => {
        return this.handleError(e);
      })
    );
  }

  deleteFilter(filtertId: any): Observable<any> {
    const url = this.apiUrl + `filter/${filtertId}`;
    return this.http.delete(url).pipe(
      catchError((e) => {
        return this.handleError(e);
      })
    );
  }
}
