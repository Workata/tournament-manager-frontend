export class Participant {
  constructor({id, first_name, last_name, gender,
     date_of_birth, club, verification_code, category}) {
    this.id = id;
    this.firstName = first_name;
    this.lastName = last_name;
    this.gender = gender;
    this.dateOfBirth = date_of_birth;
    this.club = club;
    this.verificationCode = verification_code;
    this.category = category;
  };
}