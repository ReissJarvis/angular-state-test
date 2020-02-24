export class User {
  id: number;
  name: string;
  email: string;
  dateAdded: Date;
  admin: boolean;

  constructor(id: number, name: string, email: string, dateAdded: Date, admin: boolean = false) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.dateAdded = dateAdded;
    this.admin = admin;
  }
}
