const GameView = require('./game_view');

document.addEventListener("DOMContentLoaded", function(event) {
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext('2d');
  const g = new GameView(ctx);
});
