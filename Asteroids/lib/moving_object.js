function MovingObject(options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
  this.game = options.game;
}

MovingObject.prototype.draw = function(ctx) {
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fillStyle = this.color;
  ctx.fill();
};

MovingObject.prototype.move = function() {
  const pos = this.pos;
  const vel = this.vel;
  pos[0] += vel[0];
  pos[1] += vel[1];
  this.pos = this.game.wrap(pos);
};

MovingObject.prototype.isColidedWith = function(otherObject) {
  if (distanceBetween(this.pos, otherObject.pos) <
      this.radius + otherObject.radius) {
    return true;
  }
  return false;
};

function distanceBetween(pos1, pos2) {
  return Math.sqrt(Math.pow((pos1[0] - pos2[0]), 2) +
            Math.pow((pos1[1] - pos2[1]), 2));
}

module.exports = MovingObject;
