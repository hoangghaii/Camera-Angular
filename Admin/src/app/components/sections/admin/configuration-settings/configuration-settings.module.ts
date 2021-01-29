import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationSettingsRoutingModule } from './configuration-settings-routing.module';
import { ConfigurationSettingsComponent } from './configuration-settings/configuration-settings.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  declarations: [ConfigurationSettingsComponent],
  imports: [
    CommonModule,
    ConfigurationSettingsRoutingModule,
    BrowserModule,
    FormsModule,
    SharedModule,
    NgMultiSelectDropDownModule,
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ConfigurationSettingsModule {}
