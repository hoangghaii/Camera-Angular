import { Component, Input, OnInit, Output } from '@angular/core';
import { Product, ProductType } from 'src/app/models';
import { ModalService } from 'src/app/services';
import { ProductService, ProductTypeService } from 'src/app/services/apis';
import { Helper } from 'src/app/utils/helper';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  public selectCurrentProduct: any;
  public selectCurrentProductType: any;
  public typeModal: any;
  public isOpen!: boolean;
  public helper = Helper;

  public pageOfItems!: Array<any>;
  public product!: Product[];
  public productList: any;
  public productTypeList: any;

  constructor(
    private productService: ProductService,
    private productTypeService: ProductTypeService,
    private modalService: ModalService
  ) {}

  async ngOnInit(): Promise<void> {
    this.productList = await this.getProductList();
    this.productTypeList = await this.getProductTypeList();
  }

  openModal(status?: string, type?: string): void {
    if (status === 'create') {
      this.selectCurrentProduct = null;
      this.selectCurrentProductType = null;
    }
    this.typeModal = type;
    this.isOpen = true;
  }

  async closeModal(event: any): Promise<void> {
    if (event.status && event.status === 'upCreate') {
      this.productTypeList = await this.getProductTypeList();
      this.productList = await this.getProductList();
    }
    this.isOpen = event.open;
  }

  async getProductList(): Promise<any[]> {
    return await this.productService.getProductList().toPromise();
  }

  async getProductTypeList(): Promise<any[]> {
    return await this.productTypeService.getProductTypeList().toPromise();
  }

  getProductTypeNameById(id: number) {
    let value = this.productTypeList?.filter((item: any) => item.id === id)[0]
      .name;
    return value;
  }

  selectedRowProduct(select: Product, type?: string): void {
    this.selectCurrentProductType = null;
    this.selectCurrentProduct = select;
    this.typeModal = type;
    this.isOpen = true;
  }

  selectedRowProductType(select: ProductType, type?: string): void {
    this.selectCurrentProduct = null;
    this.selectCurrentProductType = select;
    this.typeModal = type;
    this.isOpen = true;
  }

  async handleDeleteProduct(id: any): Promise<void> {
    this.productService.deleteProduct(id).subscribe(async (res) => {
      this.modalService.open('✔️ Xóa sản phẩm thành công !');
      this.productList = await this.getProductList();
    });
  }

  async handleDeleteProductType(id: any): Promise<void> {
    this.productTypeService.deleteProductType(id).subscribe(async (res) => {
      this.modalService.open('✔️ Xóa loại sản phẩm thành công !');
      this.productTypeList = await this.getProductTypeList();
    });
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
