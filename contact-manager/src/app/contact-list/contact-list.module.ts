import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactListComponent } from './contact-list.component';
import { ContactListRoutingModule } from './contact-list-routing.module';
import { ContactService } from '../services/contact.service';

@NgModule({
  declarations: [
    ContactListComponent
  ],
  imports: [
    CommonModule,
    ContactListRoutingModule
  ],
  providers: [
    ContactService
  ]
})
export class ContactListModule { }
