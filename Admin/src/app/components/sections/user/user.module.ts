import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserModalComponent } from './user-modal/user-modal.component';

@NgModule({
  declarations: [UserComponent, UserModalComponent],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
