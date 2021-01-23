import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  public isToogle1: boolean = true;
  public isToogle2: boolean = false;

  constructor() {}
}
