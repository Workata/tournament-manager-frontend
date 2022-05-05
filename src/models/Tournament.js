export class Tournament {
      constructor({id, name, start_date, end_date, location, phone_number, email}) {
        this.id = id;
        this.name = name;
        this.startDate = new Date(start_date);
        this.endDate = new Date(end_date);
        this.location = location;
        this.phoneNumber = phone_number;
        this.email = email;
      };
}