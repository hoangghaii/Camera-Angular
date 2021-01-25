import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { ConfigurationSettingsRoutingModule } from './configuration-settings-routing.module';
import { ConfigurationSettingsComponent } from './configuration-settings.component';

@NgModule({
  declarations: [ConfigurationSettingsComponent],
  imports: [CommonModule, ConfigurationSettingsRoutingModule, DragDropModule],
})
export class ConfigurationSettingsModule {}
