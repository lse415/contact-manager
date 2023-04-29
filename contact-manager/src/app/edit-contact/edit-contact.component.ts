import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  contactForm!: FormGroup;
  contact!: Contact;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private contactService: ContactService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id: number = +this.route.snapshot.paramMap.get('id')!;
    this.contact = this.contactService.getContact(id)!;

    this.contactForm = this.formBuilder.group({
      name: [this.contact.name, Validators.required],
      phone: [this.contact.phone, Validators.required],
      email: [this.contact.email, Validators.email]
    });
  }

  onSubmit(): void {
    this.contact.name = this.contactForm.value.name;
    this.contact.phone = this.contactForm.value.phone;
    this.contact.email = this.contactForm.value.email;
    this.contactService.editContact(this.contact);
    this.router.navigate(['/contact-list']);
  }
}
