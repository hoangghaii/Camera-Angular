import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

import { HttpService } from './http.service';
import { environment as env } from 'src/environments/environment';
import { LocalStorageService } from './local-storage.service';
import { GlobalConst } from 'src/app/constants/global-const';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends HttpService {
  private apiUrl = env.BASE_URL;

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    super();
  }

  login(user: any): Observable<any> {
    return this.http.post(this.apiUrl + 'login', user).pipe(
      map((res: any) => {
        if (res) {
          return res;
        }
      }),
      catchError((e: any) => {
        if (e instanceof HttpErrorResponse) {
          return this.handleError(e);
        }
        return Observable.throw(e);
      })
    );
  }

  getCurrentUser(): Observable<any> {
    // If has logging
    if (
      this.localStorageService.getItem(
        GlobalConst.LocalStorageKeyMapping.currentUser
      )
    ) {
      return this.localStorageService.getItem(
        GlobalConst.LocalStorageKeyMapping.currentUser
      );
    }

    return this.http.get(this.apiUrl + 'getUser').pipe(
      map((res: any) => {
        if (res && res.data) {
          this.localStorageService.setItem(
            GlobalConst.LocalStorageKeyMapping.currentUser,
            res.data
          );
        }
        return res;
      }),
      catchError((e) => {
        return this.handleError(e);
      })
    );
  }

  logOut(): Observable<any> {
    return this.http.get(this.apiUrl + 'logout').pipe(
      map((res: any) => {
        if (res) {
          this.localStorageService.clearAll();
          return res;
        }
      }),
      catchError((e) => {
        return this.handleError(e);
      })
    );
  }

  public isAuthenticated(): boolean {
    const token = this.localStorageService.getItem(
      GlobalConst.LocalStorageKeyMapping.token
    );

    if (token) {
      return true;
    }

    return false;
  }
}
