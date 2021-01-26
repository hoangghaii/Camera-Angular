import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@NgModule({
  declarations: [ContentComponent, SidebarComponent],
  imports: [CommonModule, ContentRoutingModule],
})
export class ContentModule {}
