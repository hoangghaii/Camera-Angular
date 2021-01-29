import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductConfigurationComponent } from '../../sections/admin/product-configuration/product-configuration/product-configuration.component';
import { ContentComponent } from './content.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      {
        path: 'product-settings',
        component: ProductConfigurationComponent,
      },
      {
        path: 'product-manage',
        loadChildren: () =>
          import(
            `../../sections/admin/product-filter/product-filter.module`
          ).then((m) => m.ProductFilterModule),
      },
      { path: '', redirectTo: 'product-manage', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule {}
