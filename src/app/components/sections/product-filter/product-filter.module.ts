import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductFilterRoutingModule } from './product-filter-routing.module';
import { ProductComponent } from './product/product.component';
import { FilterComponent } from './filter/filter.component';
import { ProductFilterComponent } from './product-filter.component';

@NgModule({
  declarations: [ProductFilterComponent, ProductComponent, FilterComponent],
  imports: [CommonModule, ProductFilterRoutingModule],
})
export class ProductFilterModule {}
