import AI from './ai.js';
import GUI from './gui.js';
import * as utils from './utils.js';

/*
* TO-DO
* - Create symbols for private instances for ai and gui
*/

// Gets a NodeList of all clickable buttons
let buttons = document.querySelectorAll('.you a');

export default class Jokenpo {

  constructor () {
    // Last round is a TIE
    this.last_round = utils.TIE;

    // Last round movement
    this.last_movement = utils.ROCK;

    /*
    * TO-DO
    * - Create private instances of AI and GUI
    * - Makes each button in `buttons` to listen to
    *   click events, triggering the `trigger` method.
    *
    * TIP: It is easier if the context of `trigger` is
    * class Jokenpo instead of the button itself. You can
    * still pass the button as a parameter to `trigger`.
    */
  }

  /*
  * TO-DO
  * - This function should use gui.read(button) to get user's choice;
  * - Then it should compute the foe's move, by calling AI's next method,
  *   which takes (this.last_round, this.last_movement) as parameters;
  * - Then it should call gui.toggle(button) for the current button and gui.foe
  *   passing in the move the player will take this turn and the move the is going
  *   to take this turn.
  * - Finally, you should update last_round and last_movement. For last_round,
  *   you can use util's player_scored function. Passing in the move the player
  *    will take this turn and the move the foe is going to take this turn.
  */

  trigger () {
  }

}
