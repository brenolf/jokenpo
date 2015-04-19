import * as utils from './utils.js';

let current = 0;

var you = Symbol('you');
var foe = Symbol('foe');

var you_score = Symbol('you_score');
var foe_score = Symbol('foe_score');

export default class GUI {
  constructor () {
    let _you = document.querySelectorAll('.you a');
    let _foe = document.querySelectorAll('.foe a');

    this[you_score] = document.getElementById('you');
    this[foe_score] = document.getElementById('foe');

    this[you] = Array.from(_you);
    this[foe] = Array.from(_foe);
  }

  reset (index = you) {
    this[index].forEach(button => button.className = '');
  }

  toggle (button, index = you, class_name = 'active') {
    this.reset(index);
    button.className = class_name;
  }

  foe (players_move = 0, foes_move = 0) {
    let index = current % 3;

    if (current === 3 + foes_move) {
      current = 0;
      this.toggle(this[foe][index], foe);
      setTimeout(f => this.update_score(players_move, foes_move), 1000);
      return;
    }

    current++;
    this.toggle(this[foe][index], foe, 'choosing');

    setTimeout(f => this.foe(players_move, foes_move), 500);
  }

  read (button) {
    return parseInt(button.getAttribute('data-attr'));
  }

  update_score (players_move, foes_move) {
    let score = utils.player_scored(players_move, foes_move);

    this.reset();
    this.reset(foe);

    switch (score) {
      case utils.WIN:
        this[you_score].innerHTML = parseInt(this[you_score].innerHTML) + 1;
      break;

      case utils.LOSE:
        this[foe_score].innerHTML = parseInt(this[foe_score].innerHTML) + 1;
      break;
    }
  }
}
