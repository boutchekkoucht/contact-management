import { Address } from "../models/Address";
import { Contact } from "../models/Contact";

export class ContactFactory{
    

    static parseToContact(json:any):Contact{
        let contact = new Contact();
        let address = new Address();
        contact.setId(json._id);
        contact.setFirstName(json.firstName);
        contact.setLastName(json.lastName);
        contact.setBio(json.bio);
        contact.setEmail(json.email);
        contact.setCreatedAt(json.createdAt);
        contact.setPhone(json.phone);
        address.setLineOne(json.address.lineOne);
        address.setCity(json.address.city);
        address.setCity(json.address.city);
        address.setState(json.address.state);
        address.setLineTwo(json.address.lineTwo);
        address.setZipCode(json.address.zipCode);
        contact.setAddress(address);
        return contact;
    }

    static toContactArray(json):Contact[]{
        let contacts:Contact[] = [];
        json.contacts.forEach(contact => {
            contacts.push(this.parseToContact(contact));
        });
        return contacts;
    }
    
}