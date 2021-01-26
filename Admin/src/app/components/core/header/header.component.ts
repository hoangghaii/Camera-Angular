import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services';

declare const fnClock: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public currentUser: any;

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    fnClock();
    this.currentUser = this.localStorageService.getItem('getUser')['name'];
  }
}
