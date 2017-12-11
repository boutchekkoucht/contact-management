import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact/models/Contact';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() {
    this.contacts = [];
   }
  contacts:Contact[];

  ngOnInit() {
    let a = new Contact(1, 'Mohammed', 'BOUTCHEKKOUCH', 'boutchekkoucht@gmail.com', 'dwar ayt said', 'EL hajeb');
    let b = new Contact(2, 'Mohammed', 'BOUTCHEKKOUCH', 'boutchekkoucht@gmail.com', 'dwar ayt said', 'EL hajeb');
    this.contacts.push(a);
    this.contacts.push(b);
    
  }

}
