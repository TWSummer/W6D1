const Game = require('./game');
const Keymaster = require('../keymaster');

function GameView(ctx) {
  this.game = new Game();
  this.ctx = ctx;
  const run = () => {
    this.game.step();
    this.game.draw(ctx);
  };
  setInterval(run, 20);
  this.bindKeyHandlers();
}

GameView.prototype.bindKeyHandlers = function() {
  const subject = this;
  key('a', function(){
    subject.game.ship.power([-1, 0]);
  });
  key('w', function(){
    subject.game.ship.power([0, -1]);
  });
  key('s', function(){
    subject.game.ship.power([0, 1]);
  });
  key('d', function(){
    subject.game.ship.power([1, 0]);
  });
};

module.exports = GameView;
