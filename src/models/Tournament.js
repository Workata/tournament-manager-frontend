export class Tournament {
      constructor({id, name, startDate, endDate, location, phoneNumber, email}) {
        this.id = id;
        this.name = name;
        this.startDate = new Date(startDate);
        this.endDate = new Date(endDate);
        this.location = location;
        this.phoneNumber = phoneNumber;
        this.email = email;
      };
}