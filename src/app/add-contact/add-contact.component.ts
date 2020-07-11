import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from '../core/model';
import { environment } from '../../environments/environment';
import * as axios from 'axios';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
})
export class AddContactComponent implements OnInit {
  @Output() addCommentEmitter: EventEmitter<void> = new EventEmitter();

  contactToAdd: Contact = new Contact();

  constructor() {}

  ngOnInit(): void {}

  save(): void {
    axios.default
      .put(environment.apiEndPoint, this.contactToAdd)
      .then((elem) => {
        this.contactToAdd = new Contact();
        this.addCommentEmitter.emit();
      });
  }
}
