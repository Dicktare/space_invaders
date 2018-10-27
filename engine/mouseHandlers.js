/*
  #####~~~THE MAIN CLICK HANDLER~~~#####
  It maps to the click function acroding to the game state
*/
Engine.prototype.handleClick = function(poz) {
  mouseClickHandlers[this.state](poz);
}

/*
  State: Menu click handler
*/
Engine.prototype.handleMenuClick = function(poz) {
  var btnList = this.menu.buttons;
  this.checkButtonList(btnList, menuButtonsInfo.handlers, poz);
}

/*
  State: Over click handler
*/
Engine.prototype.handleGameOverClick = function(poz) {
  var btnList = this.menu.buttons;
  this.checkButtonList(btnList, menuButtonOver.handlers, poz);
}

/*
  State: Play click handler
  For now, you can just shoot.
*/
Engine.prototype.handlePlayClick = function(poz) {
  this.playerShoot();
}

/*
  Check if the collision box of a button is pressed.
  @mp      : the mouse position
  @boxPoz  : the box position
  @boxSize : the box size
*/
Engine.prototype.boxClicked = function(mp, boxPoz, boxSize) {
  if(boxPoz.x <= mp.x && boxPoz.x + boxSize.x >= mp.x &&
     boxPoz.y <= mp.y && boxPoz.y + boxSize.y >= mp.y)
      return true;

  return false;
}

/*
  This function is used to check if on of the button in the @bntList is pressed.
  @bntList  : the button list
  @handlers : the action list coresponding to the buttons
  @poz      : mouse position
*/
Engine.prototype.checkButtonList = function(btnList, handlers, poz) {
  for(var i = 0; i < btnList.length; i++) {
    if(this.boxClicked(poz, btnList[i].poz, btnList[i].size)) {
      handlers[i]();
    }
  }
}
