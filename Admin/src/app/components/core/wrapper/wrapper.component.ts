import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent implements OnInit {
  public currentUser: any;

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.currentUser = this.localStorageService.getItem('getUser')['name'];
  }
}
