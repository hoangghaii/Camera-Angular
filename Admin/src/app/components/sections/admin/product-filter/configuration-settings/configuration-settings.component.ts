import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductType } from 'src/app/models';
import { ModalService } from 'src/app/services';
import { ValidatorService } from 'src/app/services';
import {
  FilterTypeService,
  FilterService,
  ProductTypeService,
  ConfigurationSettingsService,
} from 'src/app/services/apis';

@Component({
  selector: 'app-configuration-settings',
  templateUrl: './configuration-settings.component.html',
  styleUrls: ['./configuration-settings.component.scss'],
})
export class ConfigurationSettingsComponent implements OnInit {
  public dropdownList1 = [
    { item_id: 1, item_text: 'Mumbai1' },
    { item_id: 2, item_text: 'Bangaluru1' },
    { item_id: 3, item_text: 'Pune1' },
    { item_id: 4, item_text: 'Navsari1' },
    { item_id: 5, item_text: 'New Delhi1' },
  ];

  public dropdownList2 = [
    { item_id: 1, item_text: 'Mumbai2' },
    { item_id: 2, item_text: 'Bangaluru2' },
    { item_id: 3, item_text: 'Pune2' },
    { item_id: 4, item_text: 'Navsari2' },
    { item_id: 5, item_text: 'New Delhi2' },
  ];
  public selectedItems1: any = [];
  public selectedItems2: any = [];

  public pageOfItems!: Array<any>;
  public productTypeList: any;
  public filterTypeList: any;
  public filterList: any;

  constructor(
    private fb: FormBuilder,
    private productTypeService: ProductTypeService,
    private filterTypeService: FilterTypeService,
    private filterService: FilterService,
    private configurationSettingsService: ConfigurationSettingsService,
    private modalService: ModalService
  ) {}

  async ngOnInit(): Promise<void> {
    // this.filterTypeList = await this.getFilterTypeList();
    // this.productTypeList = await this.getProductTypeList();
  }

  getValues1(): void {
    console.log(this.selectedItems1);
  }
  getValues2(): void {
    console.log(this.selectedItems2);
  }

  async getFilterTypeList(): Promise<any[]> {
    return await this.filterTypeService.getFilterTypeList().toPromise();
  }

  async getProductTypeList(): Promise<any[]> {
    return await this.productTypeService.getProductTypeList().toPromise();
  }

  handleCreateConfiguratonSettings() {}

  filterItemsOfType(typeId: number): any {
    return this.filterList.filter((item: any) => item.id === typeId);
  }

  parserObj(obj: any): object {
    return {
      id: obj.id,
      category_product_id: obj.productTypeName,
      description: obj.productTypeNote,
      updated_at: obj.updatedAt,
    };
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
