import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ContactServiceService } from '../services/contact-service.service';

@Component({
  selector: 'app-delete-contact',
  templateUrl: './delete-contact.component.html',
  styleUrls: ['./delete-contact.component.css']
})
export class DeleteContactComponent implements OnInit {

  constructor(private _contactServiceService:ContactServiceService , public bsModalRef: BsModalRef) { }
  private id:number;
  ngOnInit() {
  }

  delete(){
    this._contactServiceService.deleteContact(this.id).subscribe(res => {
        this.bsModalRef.hide();
    })
  }

}
