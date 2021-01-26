import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { LocalStorageService, ModalService, TokenService } from '../services';
import { GlobalConst } from 'src/app/constants/global-const';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(
    private localStorageService: LocalStorageService,
    private token: TokenService,
    private modalService: ModalService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token: string = this.token.getWithExpiry(
      GlobalConst.LocalStorageKeyMapping.token
    );
    const isApiUrl = request.url.startsWith(env.BASE_URL);

    request = request.clone({
      setHeaders: token && isApiUrl ? { Authorization: ` ${token}` } : {},
    });

    return next.handle(request).pipe(
      map((evt: HttpEvent<any>) => {
        return evt;
      }),
      catchError((err: HttpErrorResponse) => {
        if (err.status === 500) {
          this.modalService.open('Lỗi hệ thống');
        }
        if (err.status === 400) {
          this.modalService.open(err.error.message);
        }
        if (err.status === 422) {
          this.modalService.open(err.error.errors);
        }
        if (err.status === 401) {
          this.localStorageService.remove(
            GlobalConst.LocalStorageKeyMapping.token
          );
          this.modalService.open('Xin vui lòng đăng nhập lại');
        }
        return throwError(err);
      })
    );
  }
}
