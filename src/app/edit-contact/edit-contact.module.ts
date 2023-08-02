import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EditContactRoutingModule } from './edit-contact-routing.module';
import { EditContactComponent } from './edit-contact.component';

@NgModule({
  declarations: [
    EditContactComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EditContactRoutingModule
  ],
  exports: [
    EditContactComponent
  ]
})
export class EditContactModule { }
