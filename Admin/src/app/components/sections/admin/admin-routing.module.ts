import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationSettingsComponent } from './configuration-settings/configuration-settings.component';
import { FilterComponent } from './filter/filter.component';
import { AdminComponent } from './admin.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
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
  {
    path: 'configuration-settings',
    component: ConfigurationSettingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
