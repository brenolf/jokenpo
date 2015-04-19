export const [LOSE, WIN, TIE] = [0, 1, 2];
export const [SCISSORS, PAPER, ROCK] = [0, 1, 2];

export function player_scored (players_move, foes_move) {
  if (players_move === foes_move)
    return TIE;

  players_move = (players_move + 1) % 3;

  if (players_move === foes_move)
    return WIN;

  return LOSE;
};

export function mod (n, m) {
  return ((n % m) + m) % m;
};
