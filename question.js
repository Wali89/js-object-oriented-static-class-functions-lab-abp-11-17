'use strict';

class Question {
  constructor(what) {
    this.question = what
    this.save();
  }

  save() {
    this.constructor._All.push(this)
  }

  static All() {
    return this._All;
  }

}

Question._All = [];
