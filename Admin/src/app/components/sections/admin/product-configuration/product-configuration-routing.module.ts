import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductConfigurationComponent } from './product-configuration/product-configuration.component';

const routes: Routes = [{ path: '', component: ProductConfigurationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductConfigurationRoutingModule {}
