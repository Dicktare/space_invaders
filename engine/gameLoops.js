Engine.prototype.runPlayLoop = function() {
  this.checkGameOver();
  this.map.render();
  this.player.render();
  this.player.updatePlayerPosition();
  this.applyBulletLogic();
  this.applyEnemyLogic();
  this.checkCollisions();
  this.drawScore();
  this.enemyShoot();
}

Engine.prototype.runMenuLoop = function() {
  this.menu.render();
  this.menu.updateStars();
}

Engine.prototype.runGameOverLoop = function() {
  this.over_menu.render();
}
