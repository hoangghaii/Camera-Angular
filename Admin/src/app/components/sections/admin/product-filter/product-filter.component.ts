import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss'],
})
export class ProductFilterComponent implements OnInit {
  public isToogle1: boolean = true;
  public isToogle2: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  changeBg1() {
    this.isToogle1 = !this.isToogle1;
    if (this.isToogle2) {
      this.isToogle2 = !this.isToogle2;
    }
    this.isToogle1 = true;
  }
  changeBg2() {
    this.isToogle2 = !this.isToogle2;
    if (this.isToogle1) {
      this.isToogle1 = !this.isToogle1;
    }
    this.isToogle2 = true;
  }
}
