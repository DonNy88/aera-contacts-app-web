import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Contact } from '../core/model';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  readonly tableHeadName = 'Name';
  readonly tableHeadSurname = 'Surname';
  readonly tableHeadAddress = 'Address';
  readonly tableHeadEmail = 'Email';
  readonly tableHeadLatitude = 'Lat';
  readonly tableHeadLongitude = 'Lon';
  readonly tableHeadPhoneNumber = 'Phone Number';
  readonly tableHeadOtherInfo = 'Other info';

  contacts$: Observable<Contact[]>;

  constructor(private contactsService: ContactsService) {}

  ngOnInit(): void {
    this.getCustomers();
    console.log('jojdaoisjdoasijdoasijdoasijdoaisjdoa');
  }

  getCustomers(): void {
    this.contacts$ = this.contactsService.getAll();
  }
}
