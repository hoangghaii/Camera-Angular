import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductConfigurationRoutingModule } from './product-configuration-routing.module';
import { ProductConfigurationComponent } from './product-configuration/product-configuration.component';


@NgModule({
  declarations: [ProductConfigurationComponent],
  imports: [
    CommonModule,
    ProductConfigurationRoutingModule
  ]
})
export class ProductConfigurationModule { }
