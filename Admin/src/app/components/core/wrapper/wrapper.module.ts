import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared.module';

import { WrapperRoutingModule } from './wrapper-routing.module';
import { WrapperComponent } from './wrapper.component';

@NgModule({
  declarations: [WrapperComponent],
  imports: [
    CommonModule,
    WrapperRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class WrapperModule {}
