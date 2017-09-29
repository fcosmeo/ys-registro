export class Person{
  constructor(
    public id: number,
    public first_name: string,
    public last_name: string,
    public dni: string,
    public birthDate= new Date(),
    public email: string,
    public cellPhone: string,
    public statusId: number,
    public registrationDate= new Date(),
    public modificationDate= new Date(),
    public sendMail: number
  ){}
}
