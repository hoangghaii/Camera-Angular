import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ErrorComponent } from './components/core/error/error.component';
import { ModalComponent } from './directives/modal.component ';
import { LoadingComponent } from './components/core/loading/loading.component';
import { HeaderComponent } from './components/core/header/header.component';
import { PaginationComponent } from './components/core/pagination/pagination.component';

@NgModule({
  declarations: [
    ErrorComponent,
    ModalComponent,
    LoadingComponent,
    HeaderComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    ErrorComponent,
    LoadingComponent,
    ModalComponent,
    HeaderComponent,
    PaginationComponent,
  ],
  entryComponents: [ModalComponent],
  providers: [],
})
export class SharedModule {}
