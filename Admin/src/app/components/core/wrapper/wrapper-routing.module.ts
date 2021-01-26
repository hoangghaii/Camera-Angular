import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: 'content',
        loadChildren: () =>
          import(`../content/content.module`).then((m) => m.ContentModule),
      },
      {
        path: '',
        loadChildren: () =>
          import(`../../sections/user/user.module`).then((m) => m.UserModule),
      },
      { path: '', redirectTo: 'user', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WrapperRoutingModule {}
