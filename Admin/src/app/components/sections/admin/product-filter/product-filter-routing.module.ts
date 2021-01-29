import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { ProductFilterComponent } from './product-filter.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductFilterComponent,
    children: [
      {
        path: 'product',
        component: ProductComponent,
      },
      {
        path: 'filter',
        component: FilterComponent,
      },
      {
        path: '',
        redirectTo: 'product',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductFilterRoutingModule {}
