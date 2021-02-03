import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserModalComponent } from './user-modal/user-modal.component';
import { SharedModule } from 'src/app/shared.module';
import { ConfigurationContentAComponent } from './configuration-content-a/configuration-content-a.component';
import { ConfigurationContentBComponent } from './configuration-content-b/configuration-content-b.component';
import { ConfigurationContentCComponent } from './configuration-content-c/configuration-content-c.component';

@NgModule({
  declarations: [
    UserComponent,
    UserModalComponent,
    ConfigurationContentAComponent,
    ConfigurationContentBComponent,
    ConfigurationContentCComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    UserRoutingModule,
    Ng2SearchPipeModule,
    SharedModule,
  ],
})
export class UserModule {}
