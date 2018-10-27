Engine.getAllGameStates = function() {
  return gameStates;
}

Engine.setGameState = function(state) {
  gameStates = this.getAllGameStates();
  index = gameStates.indexOf(state);
  if(index > -1) {
    this.gameState = state;
  }else {
    console.log('set Game State error');
    debugger;
  }
}

Engine.getGameLoop = function() {
  if(this.state == null ) {
    console.log('get Game Loop');
    debugger;
  }
}
