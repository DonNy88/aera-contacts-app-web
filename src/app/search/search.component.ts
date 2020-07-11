import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from '../../environments/environment';
import * as axios from 'axios';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() textToSearchEmitter: EventEmitter<string> = new EventEmitter();

  textToSearch = '';

  constructor() { }

  ngOnInit(): void {
  }

  search(): void {
    this.textToSearchEmitter.emit(this.textToSearch);
  }

}
