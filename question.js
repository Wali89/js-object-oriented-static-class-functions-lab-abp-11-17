'use strict';

class Question {
  constructor() {
    Question._All.push(this)
  }
  static All() {
    return this.all;
  }
}

Question._All = [];
