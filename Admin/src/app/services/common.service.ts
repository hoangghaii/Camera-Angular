import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  protected httpOptions = {
    headers: new HttpHeaders({}),
  };

  public isToogle1: boolean = true;
  public isToogle2: boolean = false;

  public totalPrice: number = 0;

  constructor() {}
}
