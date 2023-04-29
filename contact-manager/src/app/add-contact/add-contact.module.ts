import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddContactComponent } from './add-contact.component';

@NgModule({
  declarations: [AddContactComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [AddContactComponent]
})
export class AddContactModule {}
