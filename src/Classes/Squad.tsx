import Person from './Person';

class Squad {
  private _name: string;
  private _players: [Person];

  constructor(name: string, players: [Person]) {
    this._name = name;
    this._players = players;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get players(): [Person] {
    return this._players;
  }

  set players(value: [Person]) {
    this._players = value;
  }
}

export default Squad;
