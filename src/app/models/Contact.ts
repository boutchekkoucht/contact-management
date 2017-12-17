import { Address } from "./Address";

export class Contact{

    private id:number;
    private firstName: string
    private lastName: string
    private gender: string
    private email: string
    private phone: string
    private bio: string
    private createdAt:Date
    private address: Address

    constructor(){}

    getId():number{
        return this.id;
    }
    getFirstName():string{
        return this.firstName;
    }
    getLastName():string{
        return this.lastName;
    }
    getGender():string{
        return this.gender;
    }
    getEmail():string{
        return this.email;
    }
    getPhone():string{
        return this.phone;
    }
    getBio():string{
        return this.bio;
    }
    getCreatedAt():Date{
        return this.createdAt;
    }
    getAddress():Address{
        return this.address;
    }

    setId(id : number){
        this.id = id;
    }
    setFirstName(firstName:string){
        this.firstName = firstName;
    }
    setLastName(lastName:string){
        this.lastName = lastName;
    }
    setGender(gender:string){
        this.gender = gender;
    }
    setEmail(email:string){
        this.email = email;
    }
    setPhone(phone:string){
        this.phone = phone;
    }
    setBio(bio:string){
        this.bio = bio;
    }
    setCreatedAt(createdAt:Date){
        this.createdAt = createdAt;
    }
    setAddress(address:Address){
        this.address = address;
    }


}