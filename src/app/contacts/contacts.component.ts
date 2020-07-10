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

  contactSelected: Contact = {
    address: '',
    email: '',
    id: '',
    latitude: 0,
    longitude: 0,
    name: '',
    otherInfo: '',
    phoneNumber: '',
    surname: '',
  };

  constructor() {}

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts(): void {
    axios.default.get(environment.apiEndPoint).then((response) => {
      this.contacts$ = response.data;
    });
  }

  updatecCntactSelected(contact: Contact): void {
    this.contactSelected = contact;
    console.log(contact);
  }
}
