import EVENT_STATE from '../EVENT_STATE';
import Person from './Person';

class SquadminEvent {
  private _eventId: string;
  private _eventName: string;
  private _location: string;
  private _eventDate: Date;
  private _invitedPersons: [Person];
  private _organiser: Person;
  private _eventState: EVENT_STATE;

  constructor(
    eventId: string,
    eventName: string,
    location: string,
    eventDate: Date,
    invitedPersons: [Person],
    organiser: Person,
    eventState: EVENT_STATE,
  ) {
    this._eventId = eventId;
    this._eventName = eventName;
    this._location = location;
    this._eventDate = eventDate;
    this._invitedPersons = invitedPersons;
    this._organiser = organiser;
    this._eventState = eventState;
  }

  get eventId(): string {
    return this._eventId;
  }

  set eventId(value: string) {
    this._eventId = value;
  }

  get eventName(): string {
    return this._eventName;
  }

  set eventName(value: string) {
    this._eventName = value;
  }

  get location(): string {
    return this._location;
  }

  set location(value: string) {
    this._location = value;
  }

  get eventDate(): Date {
    return this._eventDate;
  }

  set eventDate(value: Date) {
    this._eventDate = value;
  }

  get invitedPersons(): [Person] {
    return this._invitedPersons;
  }

  set invitedPersons(value: [Person]) {
    this._invitedPersons = value;
  }

  get organiser(): Person {
    return this._organiser;
  }

  set organiser(value: Person) {
    this._organiser = value;
  }

  get eventState(): EVENT_STATE {
    return this._eventState;
  }

  set eventState(value: EVENT_STATE) {
    this._eventState = value;
  }
}

export default SquadminEvent;
