import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'product-filter',
    loadChildren: () =>
      import(`../../sections/product-filter/product-filter.module`).then(
        (m) => m.ProductFilterModule
      ),
  },
  {
    path: 'configuration-settings',
    loadChildren: () =>
      import(
        `../../sections/configuration-settings/configuration-settings-routing.module`
      ).then((m) => m.ConfigurationSettingsRoutingModule),
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
