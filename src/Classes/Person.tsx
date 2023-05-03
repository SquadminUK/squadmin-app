class Person {
  private _userId: string;
  private _firstName: string;
  private _lastName: string;
  private _emailAddress: string;
  private _mobileNumber: string;
  private _dateOfBirth: string;

  constructor(
    userId: string,
    firstName: string,
    lastName: string,
    emailAddress: string,
    mobileNumber: string,
    dateOfBirth: string,
  ) {
    this._userId = userId;
    this._firstName = firstName;
    this._lastName = lastName;
    this._emailAddress = emailAddress;
    this._mobileNumber = mobileNumber;
    this._dateOfBirth = dateOfBirth;
  }

  get userId(): string {
    return this._userId;
  }

  set userId(value: string) {
    this._userId = value;
  }

  get emailAddress(): string {
    return this._emailAddress;
  }

  set emailAddress(value: string) {
    this._emailAddress = value;
  }

  get mobileNumber(): string {
    return this._mobileNumber;
  }

  set mobileNumber(value: string) {
    this._mobileNumber = value;
  }

  get dateOfBirth(): string {
    return this._dateOfBirth;
  }

  set dateOfBirth(value: string) {
    this._dateOfBirth = value;
  }
}

export default Person;
