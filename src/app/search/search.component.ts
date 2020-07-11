import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
    this.textToSearch = '';
  }

}
