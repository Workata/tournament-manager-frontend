export class Tournament {
      constructor({id,name, startDate, endDate, location}) {
        this.id = id;
        this.name = name;
        this.startDate = new Date(startDate);
        this.endDate = new Date(endDate);
        this.location = location;
      };
}