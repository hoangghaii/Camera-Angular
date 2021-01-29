import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ErrorComponent } from './components/core/error/error.component';
import { ModalComponent } from './directives/modal.component ';
import { LoadingComponent } from './components/core/loading/loading.component';
import { HeaderComponent } from './components/core/header/header.component';

@NgModule({
  declarations: [
    ErrorComponent,
    ModalComponent,
    LoadingComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [ErrorComponent, LoadingComponent, ModalComponent, HeaderComponent],
  entryComponents: [ModalComponent],
  providers: [],
})
export class SharedModule {}
