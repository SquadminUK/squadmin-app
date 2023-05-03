class EventInvite {
  private _inviteId: string;
  private _dateResponded: Date;
  private _isAttending: Boolean;
  private _squadminEventId: string;

  constructor(
    inviteId: string,
    dateResponded: Date,
    isAttending: Boolean,
    squadminEventId: string,
  ) {
    this._inviteId = inviteId;
    this._dateResponded = dateResponded;
    this._isAttending = isAttending;
    this._squadminEventId = squadminEventId;
  }

  get inviteId(): string {
    return this._inviteId;
  }

  set inviteId(value: string) {
    this._inviteId = value;
  }

  get dateResponded(): Date {
    return this._dateResponded;
  }

  set dateResponded(value: Date) {
    this._dateResponded = value;
  }

  get isAttending(): Boolean {
    return this._isAttending;
  }

  set isAttending(value: Boolean) {
    this._isAttending = value;
  }

  get squadminEventId(): string {
    return this._squadminEventId;
  }

  set squadminEventId(value: string) {
    this._squadminEventId = value;
  }
}

export default EventInvite;
