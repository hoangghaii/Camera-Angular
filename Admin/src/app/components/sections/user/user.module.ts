import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SearchPipe } from 'src/app/pipe/search.pipe';
import { HighlightDirective } from 'src/app/directives/highlight.directive';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserModalComponent } from './user-modal/user-modal.component';

@NgModule({
  declarations: [
    UserComponent,
    UserModalComponent,
    SearchPipe,
    HighlightDirective,
  ],
  imports: [ReactiveFormsModule, FormsModule, CommonModule, UserRoutingModule],
})
export class UserModule {}
