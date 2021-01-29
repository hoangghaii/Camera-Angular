import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared.module';
import { ProductFilterRoutingModule } from './product-filter-routing.module';
import { PaginationComponent } from 'src/app/components/core/pagination/pagination.component';

import { ProductComponent } from './product/product.component';
import { FilterComponent } from './filter/filter.component';
import { ProductFilterComponent } from './product-filter.component';
import { ModalProductComponent } from './product/modal-product/modal-product.component';
import { ModalFilterComponent } from './filter/modal-filter/modal-filter.component';
import { ModalProductTypeComponent } from './product/modal-product-type/modal-product-type.component';
import { ModalFilterTypeComponent } from './filter/modal-filter-type/modal-filter-type.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    ProductFilterComponent,
    ProductComponent,
    FilterComponent,
    ModalProductComponent,
    ModalFilterComponent,
    ModalProductTypeComponent,
    ModalFilterTypeComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ProductFilterRoutingModule,
    SharedModule,
    NgMultiSelectDropDownModule,
  ],
})
export class ProductFilterModule {}
