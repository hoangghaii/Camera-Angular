import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'sidebar',
    loadChildren: () =>
      import(`./components/core/sidebar/sidebar.module`).then(
        (m) => m.SidebarModule
      ),
  },
  { path: '', redirectTo: 'sidebar', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
