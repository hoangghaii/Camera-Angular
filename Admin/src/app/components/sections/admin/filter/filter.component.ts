import { Component, OnInit } from '@angular/core';
import { Filter, FilterType } from 'src/app/models';
import { ModalService } from 'src/app/services';
import { FilterService, FilterTypeService } from 'src/app/services/apis';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  public selectCurrentFilter: any;
  public selectCurrentFilterType: any;
  public typeModal: any;
  public isOpen!: boolean;

  public pageOfItems!: Array<any>;
  public filterList: any;
  public filterTypeList: any;

  constructor(
    // private productService: FilterService,
    private filterTypeService: FilterTypeService,
    private modalService: ModalService
  ) {}

  async ngOnInit(): Promise<void> {
    this.filterTypeList = await this.getFilterTypeList();
  }

  openModal(status?: string, type?: string): void {
    if (status === 'create') {
      this.selectCurrentFilter = null;
      this.selectCurrentFilterType = null;
    }
    this.typeModal = type;
    this.isOpen = true;
  }

  async closeModal(event: any): Promise<void> {
    if (event.status && event.status === 'upCreate') {
      this.filterTypeList = await this.getFilterTypeList();
      // this.productList = await this.getProductList();
    }
    this.isOpen = event.open;
  }

  async getFilterTypeList(): Promise<any[]> {
    return await this.filterTypeService.getFilterTypeList().toPromise();
  }

  selectedRowFilter(select: Filter, type?: string): void {
    this.selectCurrentFilterType = null;
    this.selectCurrentFilter = select;
    this.typeModal = type;
    this.isOpen = true;
  }

  selectedRowFilterType(select: FilterType, type?: string): void {
    this.selectCurrentFilter = null;
    this.selectCurrentFilterType = select;
    this.typeModal = type;
    this.isOpen = true;
  }

  async handleDeleteFilterType(id: any): Promise<void> {
    this.filterTypeService.deleteFilterType(id).subscribe(async (res) => {
      this.modalService.open('✔️ Xóa loại sản phẩm thành công !');
      this.filterTypeList = await this.getFilterTypeList();
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
