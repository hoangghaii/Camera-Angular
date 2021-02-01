import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'product-manage',
    loadChildren: () =>
      import(`../../sections/admin/admin.module`).then((m) => m.AdminModule),
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
