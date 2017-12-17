import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ContactServiceService {

  constructor(private _http: Http) { }
  
  getAllContacts(){
    return this._http.get('http://localhost:8000/api/v1/contacts')
      .map(res => res.json());
  }
}
