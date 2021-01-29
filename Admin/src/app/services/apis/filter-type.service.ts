import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { HttpService } from '../http.service';
import { FilterType } from 'src/app/models';
@Injectable({
  providedIn: 'root',
})
export class FilterTypeService extends HttpService {
  apiUrl = env.BASE_URL;

  constructor(private http: HttpClient) {
    super();
  }

  getFilterTypeList(): Observable<any[]> {
    const url = this.apiUrl + `category_filter`;
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

  getFilterType(filterTypeId: any): Observable<FilterType[]> {
    const url = this.apiUrl + `category_filter/${filterTypeId}`;
    return this.http.get<FilterType[]>(url).pipe(
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

  createFilterType(objFilterType: FilterType): Observable<FilterType[]> {
    const url = this.apiUrl + `category_filter`;

    return this.http.post<FilterType[]>(url, objFilterType).pipe(
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

  updateFilterType(
    objFilterType: FilterType,
    filterTypeId: any
  ): Observable<FilterType[]> {
    const url = this.apiUrl + `category_filter/${filterTypeId}`;

    return this.http.put<FilterType[]>(url, objFilterType).pipe(
      catchError((e) => {
        return this.handleError(e);
      })
    );
  }

  deleteFilterType(filterTypeId: any): Observable<any> {
    const url = this.apiUrl + `category_filter/${filterTypeId}`;
    return this.http.delete(url).pipe(
      catchError((e) => {
        return this.handleError(e);
      })
    );
  }
}
