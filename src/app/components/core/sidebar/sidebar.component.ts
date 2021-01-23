import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
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
