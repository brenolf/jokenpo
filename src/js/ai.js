import * as utils from './utils.js';

export default class AI {

  // Returns the next move the foe should take
  next (last, player) {
    if (last === utils.TIE)
      return ~~(Math.random() * 3);

    if (last === utils.LOSE)
      return player;

    return utils.mod(player - 1, 3);
  }

}
