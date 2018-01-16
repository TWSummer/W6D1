const MovingObject = require('./moving_object');
const Util = require('./util');
const Game = require('./game');

function Asteroid(pos, game) {
  const radius = 18;
  const color = "#808080";
  const vel = Util.randomVec(2);
  MovingObject.call(this, {
    pos: pos,
    vel: vel,
    color: color,
    radius: radius,
    game: game,
  });
}
Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;
