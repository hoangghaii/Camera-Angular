import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuration-content-b',
  templateUrl: './configuration-content-b.component.html',
  styleUrls: ['./configuration-content-b.component.scss'],
})
export class ConfigurationContentBComponent implements OnInit {
  public isOpen!: boolean;

  constructor() {}

  ngOnInit(): void {}

  openModal(): void {
    this.isOpen = true;

  }

  closeModal(event: any): void {
    this.isOpen = event.isOpen;
  }
}
