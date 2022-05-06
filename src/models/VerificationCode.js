export class VerificationCode {
  constructor({id, code, participants_limit, club}) {
    this.id = id;
    this.code = code;
    this.participantsLimit = participants_limit;
    this.club = club;
  };
}