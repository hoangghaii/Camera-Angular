import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuration-content-c',
  templateUrl: './configuration-content-c.component.html',
  styleUrls: ['./configuration-content-c.component.scss'],
})
export class ConfigurationContentCComponent implements OnInit {
  public isOpen!: boolean;

  constructor() {}

  ngOnInit(): void {}

  openModal(): void {
    this.isOpen = true;
    console.log(this.isOpen);
  }

  closeModal(event: any): void {
    this.isOpen = event.isOpen;
  }
}
