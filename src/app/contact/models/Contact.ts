export class Contact{

    private _id:number;
    private _firstName:string;
    private _lastName:string;
    private _emailAdress:string;
    private _adress:string;
    private _city:string;

    constructor(id: number, firstName:string, lastName:string, emailAdress:string, adress:string, city:string) {
        this._id          = id;
        this._firstName   = firstName;
        this._lastName    = lastName;
        this._emailAdress = emailAdress;
        this._adress      = adress;
        this._city        = city;
    }
    
}