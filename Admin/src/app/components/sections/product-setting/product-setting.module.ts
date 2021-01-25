import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductSettingRoutingModule } from './product-setting-routing.module';
import { ProductSettingComponent } from './product-setting.component';

@NgModule({
  declarations: [ProductSettingComponent],
  imports: [CommonModule, ProductSettingRoutingModule],
})
export class ProductSettingModule {}
