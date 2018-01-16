const Asteroid = require('./asteroid');
const Ship = require('./ship');

function Game() {
  this.dim_x = 1800;
  this.dim_y = 900;
  this.num_asteroids = 12;
  this.asteroids = [];
  this.addAsteroids();
  this.ship = new Ship(this.randomPosition(), this);
}

Game.prototype.addAsteroids = function() {
  for (let i = 0; i<this.num_asteroids; i++) {
    const pos = this.randomPosition();
    this.asteroids.push(new Asteroid(pos, this));
  }
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0,0,this.dim_x, this.dim_y);
  this.allObjects().forEach(object => object.draw(ctx));
};

Game.prototype.moveObjects = function() {
  this.allObjects().forEach(object => object.move());
};

Game.prototype.wrap = function(pos) {
  let x = pos[0];
  let y = pos[1];
  if (x < 0) {
    x += this.dim_x;
  }
  if (x > this.dim_x) {
    x -= this.dim_x;
  }
  if (y < 0) {
    y += this.dim_y;
  }
  if (y > this.dim_y) {
    y -= this.dim_y;
  }
  return [x, y];
};

Game.prototype.checkCollisions = function() {
  for (let i = 0; i < this.asteroids.length; i++) {
    if (this.asteroids[i].isColidedWith(this.ship)) {
      this.ship.relocate();
    }
  }
};

Game.prototype.step = function() {
  this.moveObjects();
  this.checkCollisions();
};

Game.prototype.randomPosition = function() {
  return [Math.random() * this.dim_x, Math.random() * this.dim_y];
};

Game.prototype.allObjects = function() {
  return this.asteroids.concat([this.ship]);
};

module.exports = Game;
