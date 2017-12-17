import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/Contact';
import { ContactServiceService } from '../services/contact-service.service';
import { ContactFactory } from '../factories/ContactFactory';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts:Contact[];
  constructor(private _contactServiceService:ContactServiceService) { 
   }
  

  ngOnInit() {
    this._contactServiceService.getAllContacts().subscribe(response => {
      this.contacts = ContactFactory.toContactArray(response);
    });
  }

}
