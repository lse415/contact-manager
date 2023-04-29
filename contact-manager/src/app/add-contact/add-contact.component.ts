import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  contactForm!: FormGroup;
  contact: Contact = new Contact(0, '', '', '');

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.email]
    });
  }

  onSubmit(): void {
    const contact: Contact = {
      id: this.contactService.getNextId(),
      name: this.contactForm.value.name,
      phone: this.contactForm.value.phone,
      email: this.contactForm.value.email
    };
    this.contactService.addContact(contact);
    this.router.navigate(['/contact-list']);
  }
}
