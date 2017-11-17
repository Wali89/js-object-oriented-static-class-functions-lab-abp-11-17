'use strict';

class Question {
  constructor() {
    this.save()
  }

  static All() {
    return this._All;
  }

}

Question._All = [];
