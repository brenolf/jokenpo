import AI from './ai.js';
import GUI from './gui.js';
import * as utils from './utils.js';

// Create symbols
let key = {
  ai:       Symbol('ai'),
  gui:      Symbol('gui')
};

// Gets a NodeList of all clickable buttons
let buttons = document.querySelectorAll('.you a');

export default class Jokenpo {

  constructor () {
    // Last round is a TIE
    this.last_round = utils.TIE;

    // Last round movement
    this.last_movement = utils.ROCK;

    // New instance of AI class
    this[key.ai] = new AI();

    // New instance of GUI to take care of animations
    this[key.gui] = new GUI();

    // Transforms `buttons` to an array, using Array helper
    buttons = Array.from(buttons);

    // Iterates over `buttons` to add onclick listener
    buttons.forEach(button =>
      button.onclick = this.trigger.bind(this, button)
    );
  }

  trigger (button) {
    // Renaming 'cause I'm lazy
    let ai = this[key.ai];
    let gui = this[key.gui];

    // Gets player's choice
    let players_move = gui.read(button);

    // Gets the foe's move, passing the last result and player's move
    let foes_move = ai.next(this.last_round, this.last_movement);

    // Do GUI stuff
    gui.toggle(button);
    gui.foe(players_move, foes_move);

    // Update `last`s variables
    this.last_round = utils.player_scored(players_move, foes_move);
    this.last_movement = players_move;
  }

}
