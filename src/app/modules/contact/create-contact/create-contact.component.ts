import {Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../../../models/Contact';
import { FormsModule } from '@angular/forms';
import { ContactServiceService } from '../../../services/contact-service.service';


@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {
  private contact : Contact;
  constructor(private _serviceContact:ContactServiceService, private _router: Router) {
    this.contact = new Contact();
  }

  ngOnInit() {
  }

  saveContact(){
    this._serviceContact.addContact(this.contact).subscribe(response => {
     this._router.navigate(['all-contacts']);
    });
  }

}
