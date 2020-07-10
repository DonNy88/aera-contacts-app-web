import { Component, OnInit, Input } from '@angular/core';

import { Contact } from 'src/app/core/model';
import * as axios from 'axios';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss'],
})
export class EditContactComponent implements OnInit {
  @Input() contact: Contact;

  constructor() {}

  ngOnInit(): void {}

  update(): void {
    axios.default.put(environment.apiEndPoint, this.contact);
  }
}
