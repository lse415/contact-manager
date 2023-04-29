import { Component, Input } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @Input() contact: Contact;

  constructor() {
    this.contact = new Contact(0, '', '', '');
  }
}
