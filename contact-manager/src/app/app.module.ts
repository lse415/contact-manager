import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

import { AddContactModule } from './add-contact/add-contact.module';
import { ContactListModule } from './contact-list/contact-list.module';
import { EditContactModule } from './edit-contact/edit-contact.module';
import { ContactService } from './services/contact.service';
import { HomeComponent } from './home/home.component';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AddContactModule,
    ContactListModule,
    EditContactModule,
    ReactiveFormsModule,
    RouterModule.forRoot([ // Add RouterModule to the imports array and configure your routes
      { path: '', component: ContactListComponent },
      { path: 'edit-contact/:id', component: EditContactComponent },
    ])
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
