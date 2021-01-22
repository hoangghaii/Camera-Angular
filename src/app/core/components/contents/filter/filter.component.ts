import { Component, OnInit } from '@angular/core';

declare function fnFilterSection(): any;

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    fnFilterSection();
  }
}
