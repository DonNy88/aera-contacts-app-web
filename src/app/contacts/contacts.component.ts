import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../core/model';
import { environment } from '../../environments/environment';
import * as axios from 'axios';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  contacts$: Observable<Contact[]>;

  contactSelected: Contact;

  constructor() {}

  ngOnInit(): void {
    this.contactSelected = new Contact();
    this.getContacts();
  }

  getContacts(): void {
    this.fetchContacts();
  }

  updateContactSelected(contact: Contact): void {
    this.contactSelected = contact;
  }

  remove(): void {
    axios.default
      .delete(environment.apiEndPoint, {
        params: {
          id: this.contactSelected.id,
        },
      })
      .then(() => this.fetchContacts());
  }

  update(): void {
    axios.default.put(environment.apiEndPoint, this.contactSelected);
  }

  addContactListener($event: void): void {
    console.log('hohoho');
    this.fetchContacts();
  }

  textToSearchListener($event: string): void {
    axios.default.get(environment.apiEndPoint + '/search', {
      params: {
        text: $event,
        phoneNumber: $event
      }
    }).then(filtredContacts => {
      this.contacts$ = filtredContacts.data;
      console.log(filtredContacts.data);
    });
  }

  private fetchContacts(): void {
    axios.default.get(environment.apiEndPoint).then((response) => {
      this.contacts$ = response.data;
      console.log(response.data);
    });
  }


}
