const Util = require('./util');
const MovingObject = require('./moving_object');

function Ship(pos, game) {
  const radius = 12;
  const color = "#FFFF00";
  const vel = [0,0];
  MovingObject.call(this, {
    pos: pos,
    vel: vel,
    color: color,
    radius: radius,
    game: game,
  });
}

Util.inherits(Ship, MovingObject);

Ship.prototype.relocate = function() {
  this.pos = this.game.randomPosition();
  this.vel = [0, 0];
};

Ship.prototype.power = function(impulse) {
  const vel = this.vel;
  vel[0] += impulse[0];
  vel[1] += impulse[1];
  this.vel = vel;
};

module.exports = Ship;
