import { Component, OnInit, TemplateRef } from '@angular/core';
import { Contact } from '../models/Contact';
import { ContactServiceService } from '../services/contact-service.service';
import { ContactFactory } from '../factories/ContactFactory';
import { FormsModule } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DeleteContactComponent } from '../delete-contact/delete-contact.component';
import { EditContactComponent } from '../edit-contact/edit-contact.component';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts:Contact[];
  bsModalRef: BsModalRef;
    constructor(private _contactServiceService:ContactServiceService,private modalService: BsModalService) { 
  }

  ngOnInit() {
    this.getAllContacts();
  }

  getAllContacts (){
    this._contactServiceService.getAllContacts().subscribe(response => {
      this.contacts = ContactFactory.toContactArray(response);
    });
  }

  
  deleteContact(id){
    this.bsModalRef = this.modalService.show(DeleteContactComponent);
    this.bsModalRef.content.id = id;
    this.modalService.onHide.subscribe(() => {
      this.getAllContacts();
    }) 
  }

  editContact(contact:Contact){
    this.bsModalRef = this.modalService.show(EditContactComponent);
    this.bsModalRef.content.contact = contact;
    this.modalService.onHide.subscribe(() => {
      this.getAllContacts();
    }) 
  }

}
