/*
After the window is loaded:
  - init the engine
  - set the context of the canvas
  - set the game loop
*/
window.onload = function() {
  engine = new Engine();
  gameCanvas = document.getElementById('gameCanvas');
  ctx = gameCanvas.getContext('2d');
  setInterval(function(){ engine.runGameLoop() }, 1000 / 32);
}

/*
  Event Listener for the key up event
  This is used to set the player velocity
  (the mechanism used to move the player)
*/
window.addEventListener("keyup",
 function(e) {
   var l = ["w", "a", "s", "d",]
   if(l.indexOf(e.key) != -1)
    engine.player.updatePlayerVelocity(e.key, false);
 },false);

 /*
   Event Listener for the key down event
   This is used to reset the player velocity
   (the mechanism used to move the player)
 */
window.addEventListener("keydown",
 function(e) {
   var l = ["w", "a", "s", "d",]
   if(l.indexOf(e.key) != -1)
    engine.player.updatePlayerVelocity(e.key, true);
 },false);

/*
  Event listener for the click event
  This is used to shoot bullets or click buttons
*/
window.addEventListener("click",
  function(e) {
    var poz = getMousePos(gameCanvas, e);
    if(isInsideCanvas(gameCanvas, poz)) {
      engine.handleClick(poz);
    }
  },false);



function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: Math.floor(evt.clientX - rect.left),
    y: Math.floor(evt.clientY - rect.top)
  };
}

function isInsideCanvas(canvas, poz) {
  if(poz.x > 0 &&
     poz.y > 0 &&
     poz.x < canvas.width &&
     poz.y < canvas.height)
     return true;

  return false;
}
