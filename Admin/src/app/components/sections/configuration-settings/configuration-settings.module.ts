import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationSettingsRoutingModule } from './configuration-settings-routing.module';
import { ConfigurationSettingsComponent } from './configuration-settings.component';

@NgModule({
  declarations: [ConfigurationSettingsComponent],
  imports: [CommonModule, ConfigurationSettingsRoutingModule],
})
export class ConfigurationSettingsModule {}
