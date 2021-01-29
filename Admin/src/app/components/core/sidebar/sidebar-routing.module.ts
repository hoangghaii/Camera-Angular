import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'product-manage',
    loadChildren: () =>
      import(`../../sections/admin/product-filter/product-filter.module`).then(
        (m) => m.ProductFilterModule
      ),
  },
  {
    path: 'configuration-settings',
    loadChildren: () =>
      import(
        `../../sections/admin/configuration-settings/configuration-settings-routing.module`
      ).then((m) => m.ConfigurationSettingsRoutingModule),
  },
  {
    path: 'product-settings',
    loadChildren: () =>
      import(
        `../../sections/admin/product-configuration/product-configuration.module`
      ).then((m) => m.ProductConfigurationModule),
  },
  {
    path: '',
    redirectTo: 'product-manage',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidebarRoutingModule {}
