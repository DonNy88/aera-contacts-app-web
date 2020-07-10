import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Contact } from 'src/app/core/model';
import * as axios from 'axios';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-delete-contact',
  templateUrl: './delete-contact.component.html',
  styleUrls: ['./delete-contact.component.scss']
})
export class DeleteContactComponent implements OnInit {
  @Input() contact: Contact;
  @Output() contactIdToDelete: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  remove(): void {
    axios.default.delete(environment.apiEndPoint, {
      params: {
        id: this.contact.id
      }
    }).then(() => this.contactIdToDelete.emit(this.contact.id));
  }
}
