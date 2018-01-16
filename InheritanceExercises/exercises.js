Function.prototype.surrogateInherits = function(parent) {
  function Surrogate() {}
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

Function.prototype.createInherits = function(parent) {
  this.prototype = Object.create(parent.prototype);
  this.prototype.constructor = this;
};

function MovingObject () {
  this.x = 0;
  this.y = 0;
}

MovingObject.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.log(`X: ${x}, Y: ${y}`);
};

function Ship () {
  MovingObject.call(this);
}
Ship.createInherits(MovingObject);

Ship.prototype.selfDestruct = function() {
  console.log("Initiating self destruct sequence");
};

function Asteroid () {
  MovingObject.call(this);
}
Asteroid.createInherits(MovingObject);

Asteroid.prototype.impact = function() {
  console.log("KABOOM!!!!");
};

const s = new Ship();
const a = new Asteroid();

s.move(2,6);
s.selfDestruct();

a.move(3,4);
a.impact();

// a.selfDestruct();
