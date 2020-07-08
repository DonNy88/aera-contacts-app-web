import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

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
