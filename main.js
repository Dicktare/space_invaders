var ctx = null;
var engine = null;

window.onload = function() {
  engine = new Engine();
  ctx = document.getElementById('gameCanvas').getContext('2d');
  setInterval(function(){ engine.runGameLoop() }, 1000 / 32);
}

window.addEventListener("keyup",
 function(e) {
   var l = ["w", "a", "s", "d",]
   if(l.indexOf(e.key) != -1)
    engine.player.updatePlayerVelocity(e.key, false);
 },false);

window.addEventListener("keydown",
 function(e) {
   var l = ["w", "a", "s", "d",]
   if(l.indexOf(e.key) != -1)
    engine.player.updatePlayerVelocity(e.key, true);
 },false);

window.addEventListener("click",
  function(e) {
    engine.handleClick();
  }, false);
