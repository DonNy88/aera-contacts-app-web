import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { ObservableStore } from '@codewithdan/observable-store';

import { Contact } from '../core/model';
import { StoreState } from '../shared/interfaces';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactsService extends ObservableStore<StoreState> {
  constructor(private http: HttpClient) {
    super({ trackStateHistory: true });
  }

  getAll(): Observable<Contact[]> {
    const state: StoreState = this.getState();

    // pull from store cache
    // if (state && state.contacts) {
    //   console.log(this.stateHistory);
    //   return of(state.contacts);
    // }

    // doesn't exist in store so fetch from server
    console.log(this.fetchContacts().pipe(catchError(this.handleError)));
    return this.fetchContacts().pipe(catchError(this.handleError));
  }

  private fetchContacts(): any {
    return this.http.get<Contact[]>(environment.apiEndPoint).pipe(
      map((contacts) => {
        this.setState({ contacts }, ContactStoreActions.GetContacts);
        console.log(contacts);
        return contacts;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: any): any {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      // tslint:disable-next-line: deprecation
      return Observable.throw(errMessage);
    }
    // tslint:disable-next-line: deprecation
    return Observable.throw(error || 'Server error');
  }
}

export enum ContactStoreActions {
  GetContacts = 'get_customers',
}
