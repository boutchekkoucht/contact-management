export class Address{
    private lineOne: string
    private lineTwo: string
    private city: string
    private state: string
    private country: string
    private zipCode: number

    constructor () {}

    //getters
    getLineOne():string{ return this.lineOne}
    getLineTwo():string{ return this.lineTwo}
    getCity():string{ return this.city}
    getState():string{ return this.state}
    getContry():string{ return this.country}
    getZipCode():number{ return this.zipCode}
    
    //setters
    setLineOne(lineOne:string){ this.lineOne = lineOne;}
    setLineTwo(lineTwo:string){ this.lineTwo = lineTwo;}
    setState(state:string){ this.state   = state;}
    setCity(city:string){ this.city    = city;}
    setCountry(country:string){ this.country = country;}
    setZipCode(zipCode:number){ this.zipCode = zipCode;}
      
}