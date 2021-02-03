import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserModalComponent } from './user-modal/user-modal.component';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  declarations: [UserComponent, UserModalComponent],
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
