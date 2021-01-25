import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Output() pageSize = 5;

  public selectCurrent: any;
  public typeModal: any;
  public isOpen!: boolean;

  public pageOfItems!: Array<any>;
  items: any;

  constructor() {}

  ngOnInit(): void {
    // an example array of 150 items to be paged
    this.items = Array(20)
      .fill(0)
      .map((x, i) => ({ id: i + 1, name: `Item ${i + 1}` }));
  }

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

  /**
   * Pagiantion
   * @param pageOfItems
   */
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
}
