import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationSettingsComponent } from '../../sections/configuration-settings/configuration-settings.component';
import { ContentComponent } from './content.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      {
        path: 'configuration-settings',
        component: ConfigurationSettingsComponent,
      },
      {
        path: 'product-manage',
        loadChildren: () =>
          import(`../../sections/product-filter/product-filter.module`).then(
            (m) => m.ProductFilterModule
          ),
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
