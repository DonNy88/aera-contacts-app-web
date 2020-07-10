import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  readonly tableHeadName = 'Name';
  readonly tableHeadSurname = 'Surname';
  readonly tableHeadAddress = 'Address';
  readonly tableHeadEmail = 'Email';
  readonly tableHeadLatitude = 'Lat';
  readonly tableHeadLongitude = 'Lon';
  readonly tableHeadPhoneNumber = 'Phone Number';
  readonly tableHeadOtherInfo = 'Other info';

  constructor() { }

  ngOnInit(): void {
  }

}
