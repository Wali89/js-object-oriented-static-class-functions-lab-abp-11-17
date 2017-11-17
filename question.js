'use strict';

class Question {
  constructor(content) {
    this.r1 = content
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
