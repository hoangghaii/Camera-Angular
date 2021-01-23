import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductSettingComponent } from '../../sections/product-setting/product-setting.component';

const routes: Routes = [
  {
    path: 'product-filter',
    loadChildren: () =>
      import(`../../sections/product-filter/product-filter.module`).then(
        (m) => m.ProductFilterModule
      ),
  },
  {
    path: 'product-setting',
    loadChildren: () =>
      import(`../../sections/product-setting/product-setting.module`).then(
        (m) => m.ProductSettingModule
      ),
  },
  {
    path: '',
    redirectTo: 'product-filter',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidebarRoutingModule {}
