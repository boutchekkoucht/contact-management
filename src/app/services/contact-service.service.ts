import { Injectable } from '@angular/core';
import {RequestOptions, Http,  Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Contact } from '../models/Contact';
import { concat } from 'rxjs/operators/concat';

const headers = new Headers({ 'Content-Type': 'application/json'});
const options = new RequestOptions({ headers: headers });

@Injectable()
export class ContactServiceService {
  private urlServer = 'http://localhost:8000/api/v1/';
  constructor(private _http: Http) { }
  
  getAllContacts(){
    return this._http.get(this.urlServer+'contacts')
      .map(res => res.json());
  }

  addContact (contact: Contact){
      return this._http.post(this.urlServer+'contacts',contact, options).map(res => res.json);
  }

  deleteContact(id){
    return this._http.delete(this.urlServer+'contacts/'+id).map(res => res.json());
  }


  updateContact(id,contact:Contact){
    return this._http.put(this.urlServer+'contacts/'+id,contact).map(res => res.json());
  }
}
