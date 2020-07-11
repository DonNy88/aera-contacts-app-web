export class Contact {
  id: string;
  name: string;
  phoneNumber: string;
  surname: string;
  address: string;
  email: string;
  latitude: number;
  longitude: number;
  otherInfo: string;

  constructor() {
    this.id = null;
    this.name = null;
    this.phoneNumber = null;
    this.surname = null;
    this.address = null;
    this.email = null;
    this.latitude = null;
    this.longitude = null;
    this.otherInfo = null;
  }
}
