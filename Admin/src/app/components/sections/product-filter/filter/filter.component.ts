import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  public selectCurrent: any;
  public typeModal: any;
  public isOpen!: boolean;

  constructor() {}

  ngOnInit(): void {}

  openModal(status?: string, type?: string): void {
    if (status === 'create') {
      this.selectCurrent = null;
    }
    this.typeModal = type;
    this.isOpen = true;
  }

  closeModal(event: any): void {
    this.isOpen = event.isOpen;
  }
  // async closeModal(event: any): Promise<void> {
  //   if (event.status && event.status === 'upCreate') {
  //     this.techList = await this.getSkillList();
  //   }
  //   this.isOpen = event.isOpen;
  // }
}
