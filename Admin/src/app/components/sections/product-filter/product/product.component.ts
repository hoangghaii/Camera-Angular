import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models';
import { ProductService } from 'src/app/services/apis';
import { Helper } from 'src/app/utils/helper';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  public selectCurrent: any;
  public typeModal: any;
  public isOpen!: boolean;
  public helper = Helper;

  public pageOfItems!: Array<any>;
  public product!: Product[];
  public productList: any;

  constructor(private productService: ProductService) {}

  async ngOnInit(): Promise<void> {
    this.productList = await this.getProductList();
    console.log(this.productList);
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

  async getProductList(): Promise<any[]> {
    return await this.productService.getProductList().toPromise();
  }

  /**
   * Pagiantion
   * @param pageOfItems
   */
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
}
