import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalService } from 'src/app/services';
import { ValidatorService } from 'src/app/services';
import {
  FilterTypeService,
  FilterService,
  ProductService,
  ProductTypeService,
  ConfigurationSettingsService,
} from 'src/app/services/apis';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss'],
})
export class UserModalComponent implements OnInit {
  public searchText = '';

  public submitted: boolean = false;
  public pageOfItems!: Array<any>;
  public productList: any;
  public productTypeList: any;
  public filterTypeList: any;
  public filterProductList: any;
  public filterList: any;
  public chooseList: any = [];

  @Input() open!: boolean;
  @Output() confirm: EventEmitter<object> = new EventEmitter<object>(false);

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private productTypeService: ProductTypeService,
    private filterTypeService: FilterTypeService,
    private filterService: FilterService,
    private configurationSettingsService: ConfigurationSettingsService,
    private modalService: ModalService
  ) {}

  async ngOnInit(): Promise<void> {
    // this.initForm();
    this.filterList = await this.getFilterList();
    this.filterTypeList = await this.getFilterTypeList();
    this.productList = await this.getProductList();
    this.productTypeList = await this.getProductTypeList();
  }

  closeModal(): void {
    this.submitted = false;
    // this.productTypeForm.reset();
    this.confirm.emit({ open: false });
    this.chooseList = [];
  }

  async getFilterList(): Promise<any[]> {
    return await this.filterService.getFilterList().toPromise();
  }

  async getFilterTypeList(): Promise<any[]> {
    return await this.filterTypeService.getFilterTypeList().toPromise();
  }

  async getProductList(): Promise<any[]> {
    return await this.productService.getProductList().toPromise();
  }

  async getProductTypeList(): Promise<any[]> {
    return await this.productTypeService.getProductTypeList().toPromise();
  }

  filterItemsOfType(typeId: number): any {
    return this.filterList.filter((item: any) => item.id === typeId);
  }

  filterProductItemsOfType(typeId: number): any {
    return this.productList.filter((item: any) => item.id === typeId);
  }

  handleChooseFilterType(item: any) {
    for (const ele of this.chooseList) {
      if (ele == item) {
        return;
      }
    }
    this.chooseList.push(item);
  }

  handleDeleteFilterTypeChoose(item: any) {
    let index = this.chooseList.indexOf(item);
    if (index > -1) {
      this.chooseList.splice(index, 1);
    }
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
