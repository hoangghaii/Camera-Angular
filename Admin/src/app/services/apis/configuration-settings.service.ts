import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationSettingsService extends HttpService {
  apiUrl = env.BASE_URL;

  constructor(private http: HttpClient) {
    super();
  }

  getConfigurationSettings(): Observable<any[]> {
    const url = this.apiUrl + `filter-product`;

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

  createConfigurationSettings(obj: any): Observable<any[]> {
    const url = this.apiUrl + `filter-product`;

    return this.http.post<any[]>(url, obj).pipe(
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

  updateConfigurationSettings(obj: any, id: any): Observable<any[]> {
    const url = this.apiUrl + `filter-product/${id}`;

    return this.http.put<any[]>(url, obj).pipe(
      catchError((e) => {
        return this.handleError(e);
      })
    );
  }
}
