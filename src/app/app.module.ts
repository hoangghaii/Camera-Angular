import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/parts/header/header.component';
import { SidebarComponent } from './core/components/parts/sidebar/sidebar.component';
import { FilterComponent } from './core/components/contents/filter/filter.component';
import { FilterTypeComponent } from './core/components/contents/filter/filter-type/filter-type.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FilterComponent,
    FilterTypeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
