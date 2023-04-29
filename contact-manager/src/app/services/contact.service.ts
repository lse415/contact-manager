import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'johndoe@example.com', phone: '123-456-7890' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'janesmith@example.com', phone: '123-456-7890' },
    { id: 3, firstName: 'Bob', lastName: 'Johnson', email: 'bobjohnson@example.com', phone: '123-456-7890' },
    { id: 4, firstName: 'Sarah', lastName: 'Williams', email: 'sarahwilliams@example.com', phone: '123-456-7890' },
    { id: 5, firstName: 'Tom', lastName: 'Brown', email: 'tombrown@example.com', phone: '123-456-7890' }
  ];

  constructor() { }

  addContact(contact: Contact): Contact[] {
    this.contacts.push(contact);
    return this.contacts;
  }  

  editContact(contact: Contact): void {
    const index = this.contacts.findIndex(c => c.id === contact.id);
    if (index !== -1) {
      this.contacts[index] = contact;
    }
  }

  deleteContact(contact: Contact): Observable<void> {
    const index = this.contacts.indexOf(contact);
    if (index !== -1) {
      this.contacts.splice(index, 1);
    }
    return of(undefined);
  }  

  getContacts(): Contact[] {
    return this.contacts;
  }  

  getContact(id: number): Contact | undefined {
    return this.contacts.find(contact => contact.id === id);
  }

  getNextId(): number {
    let maxId = 0;
    for (const contact of this.contacts) {
      if (contact.id > maxId) {
        maxId = contact.id;
      }
    }
    return maxId + 1;
  }
}
