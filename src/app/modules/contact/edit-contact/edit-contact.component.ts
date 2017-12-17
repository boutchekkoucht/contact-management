import { Component, OnInit } from '@angular/core';
import { Contact } from '../../../models/Contact';
import { ContactServiceService } from '../../../services/contact-service.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  private contact : Contact;
  constructor(private _contactServiceService:ContactServiceService , public bsModalRef: BsModalRef)
  {
    this.contact = new Contact();
  }

  ngOnInit() {
  }


  updateContacte() {
    this._contactServiceService.updateContact(this.contact.getId(),this.contact)
    .subscribe(res => {
      this.bsModalRef.hide();
    })
  }

}
