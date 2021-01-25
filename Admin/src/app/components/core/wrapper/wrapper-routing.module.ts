import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductSettingComponent } from '../../sections/product-setting/product-setting.component';
import { WrapperComponent } from './wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: 'product-setting',
        component: ProductSettingComponent,
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
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import(`../sidebar/sidebar.module`).then((m) => m.SidebarModule),
  //   // canActivate: [AuthGuard],
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WrapperRoutingModule {}
