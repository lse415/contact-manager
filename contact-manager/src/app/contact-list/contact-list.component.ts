import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  contactForm: FormGroup;

  constructor(
    private contactService: ContactService,
    private formBuilder: FormBuilder
  ) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.email]
    });
  }

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts(): void {
    this.contacts = this.contactService.getContacts();
  }

  deleteContact(contact: Contact): void {
    this.contactService.deleteContact(contact).subscribe(() => {
      this.contacts = this.contacts.filter(c => c !== contact);
    });
  }  

  onSubmit(): void {
    const newContact: Contact = {
      id: this.contactService.getNextId(),
      name: this.contactForm.value.name,
      phone: this.contactForm.value.phone,
      email: this.contactForm.value.email
    };
  
    this.contactService.addContact(newContact);
    this.contacts.push(newContact); 
    this.contactForm.reset();
  }
  
}
