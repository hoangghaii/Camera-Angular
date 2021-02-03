import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuration-content-a',
  templateUrl: './configuration-content-a.component.html',
  styleUrls: ['./configuration-content-a.component.scss'],
})
export class ConfigurationContentAComponent implements OnInit {
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
