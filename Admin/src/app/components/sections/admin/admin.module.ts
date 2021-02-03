import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { PaginationComponent } from 'src/app/components/core/pagination/pagination.component';

import { ProductComponent } from './product/product.component';
import { FilterComponent } from './filter/filter.component';
import { AdminComponent } from './admin.component';
import { ModalProductComponent } from './product/modal-product/modal-product.component';
import { ModalFilterComponent } from './filter/modal-filter/modal-filter.component';
import { ModalProductTypeComponent } from './product/modal-product-type/modal-product-type.component';
import { ModalFilterTypeComponent } from './filter/modal-filter-type/modal-filter-type.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ConfigurationSettingsComponent } from './configuration-settings/configuration-settings.component';

@NgModule({
  declarations: [
    AdminComponent,
    ProductComponent,
    FilterComponent,
    ModalProductComponent,
    ModalFilterComponent,
    ModalProductTypeComponent,
    ModalFilterTypeComponent,
    ConfigurationSettingsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AdminRoutingModule,
    SharedModule,
    NgSelectModule,
  ],
})
export class AdminModule {}
