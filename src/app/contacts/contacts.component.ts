import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  tableHeadName = 'Name';
  tableHeadSurname = 'Surname';
  tableHeadAddress = 'Address';
  tableHeadEmail = 'Email';
  tableHeadLatitude = 'Lat';
  tableHeadLongitude = 'Lon';
  tableHeadPhoneNumber = 'Phone Number';
  tableHeadOtherInfo = 'Other info';

  constructor() { }

  ngOnInit(): void {
  }

}
