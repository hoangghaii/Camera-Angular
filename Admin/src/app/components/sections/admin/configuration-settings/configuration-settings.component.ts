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
  public selectedProductTypeId: any = [];
  public selectedFilterTypeId: any = [];

  public submitted: boolean = false;
  public filterProductForm!: FormGroup;
  public pageOfItems!: Array<any>;
  public productTypeList: any;
  public filterTypeList: any;
  public filterProductList: any;
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
    this.initForm();
    this.filterList = await this.getFilterList();
    this.filterTypeList = await this.getFilterTypeList();
    this.productTypeList = await this.getProductTypeList();
    this.getFilterProductTypeList();
    console.log(this.getFilterProductTypeList());
  }

  initForm(): void {
    this.filterProductForm = this.fb.group({
      id: [''],
      productTypeId: ['', [ValidatorService.required]],
      listFilterTypeId: [[], [ValidatorService.required]],
      updatedAt: [''],
    });
  }

  get f() {
    return this.filterProductForm.controls;
  }

  getValues1(): void {
    this.filterProductForm.patchValue({
      productTypeId: this.selectedProductTypeId,
    });
  }
  getValues2(): void {
    this.filterProductForm.patchValue({
      listFilterTypeId: this.selectedFilterTypeId,
    });
  }

  async getFilterList(): Promise<any[]> {
    return await this.filterService.getFilterList().toPromise();
  }

  async getFilterTypeList(): Promise<any[]> {
    return await this.filterTypeService.getFilterTypeList().toPromise();
  }

  async getProductTypeList(): Promise<any[]> {
    return await this.productTypeService.getProductTypeList().toPromise();
  }

  async getFilterProductTypeList(): Promise<any[]> {
    return (this.filterProductList = await this.configurationSettingsService
      .getConfigurationSettings()
      .toPromise());
  }

  handleCreateConfiguratonSettings() {
    // this.submitted = true;
    // if (!this.filterProductForm.valid) {
    //   return;
    // }
    const obj: any = this.parserObj(this.filterProductForm.getRawValue());
    this.configurationSettingsService
      .updateConfigurationSettings(obj)
      .subscribe((res) => {
        this.modalService.open('✔️ Đăng ký sản phẩm thành công !');
        console.log(this.getFilterProductTypeList());
      });
  }

  filterItemsOfType(typeId: number): any {
    return this.filterList.filter((item: any) => item.id === typeId);
  }

  parserObj(obj: any): object {
    return {
      id: obj.id,
      category_product_id: obj.productTypeId,
      list: obj.listFilterTypeId,
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
