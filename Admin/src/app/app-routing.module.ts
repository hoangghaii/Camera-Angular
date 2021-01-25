import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService as AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./components/auth/auth.module').then((m) => m.AuthModule),
  // },
  {
    path: '',
    loadChildren: () =>
      import(`./components/core/wrapper/wrapper.module`).then(
        (m) => m.WrapperModule
      ),
    // canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
