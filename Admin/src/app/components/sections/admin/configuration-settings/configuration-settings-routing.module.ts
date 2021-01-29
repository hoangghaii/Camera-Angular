import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationSettingsComponent } from './configuration-settings/configuration-settings.component';

const routes: Routes = [
  { path: '', component: ConfigurationSettingsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigurationSettingsRoutingModule {}
