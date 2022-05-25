export class VerificationCodeCapacity {
  constructor({id, verification_code, signed_participants, participants_limit, club}) {
    this.id = id;
    this.verificationCode = verification_code;
    this.participantsCount = signed_participants;
    this.participantsLimit = participants_limit;
    this.club = club;
  };
}