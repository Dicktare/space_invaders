function Engine() {
  this.map = new Map();
  this.player = new Player();

  //array of player bullets
  this.bulletList = [];
  //array of enemy bullets
  this.enemyBulletList = [];

  this.wave = new Wave();
}

/*
  The main Game Loop used to handle all the game Logic
*/
Engine.prototype.runGameLoop = function() {
  this.map.render();
  this.player.render();
  this.player.updatePlayerPosition();
  this.applyBulletLogic();
  this.applyEnemyLogic();
  this.checkCollisions();
  this.drawScore();
  this.enemyShoot();
}

/*
  The click handler.
  For now, each time the player clicks, the ship is shooting 1 projectile.
*/
Engine.prototype.handleClick = function() {
  this.playerShoot();
}

/*
  Create a player bullet and adds it into the  player bullet list.
*/
Engine.prototype.playerShoot = function() {
  var bullet_speed = 10;
  var poz = this.player.getCannonPoz();
  var size = {x:10, y:10}
  var b = new Bullet(poz, size, bullet_speed, 'fire');
  this.bulletList.push(b);
}

/*
  Take each enemy in the current level and check if he can shoot, then Create
  a bullet object and add it to the enemy bullet list
*/
Engine.prototype.enemyShoot = function() {
  var enemyList = this.wave.getEnemyList();
  for(var i = 0; i < enemyList.length; i++) {
    var e = enemyList[i];
    if(!e.canShoot) continue;

    var now = new Date();
    if(now - e.lastShoot >= e.fireRate) {
      e.lastShoot = now;
      var poz = e.getCannonPoz();
      var size = {x:10, y:10};
      var speed = 2;
      b = new Bullet(poz, size, speed, 'default');
      this.enemyBulletList.push(b);
    }
  }
}

Engine.prototype.applyBulletLogic = function() {
  for(var i = 0; i < this.bulletList.length; i++) {
    var b = this.bulletList[i];
    b.render();
    b.move(-1);

    if(b.poz.y < 0)
      this.bulletList.splice(i, 1);
  }

  for(var i = 0; i < this.enemyBulletList.length; i++) {
    var x = this.enemyBulletList[i];
    x.render();
    x.move(1);

    if(x.poz.y > 610)
      this.enemyBulletList.splice(i, 1);
  }
}

Engine.prototype.applyEnemyLogic = function() {
  var enemyList = this.wave.getEnemyList();
  this.wave.changeDirection();
  for(var i = 0; i < enemyList.length; i++) {
    var e = enemyList[i];
    e.render();
    e.move();
    e.updateSprite();
  }
}

Engine.prototype.checkCollisions = function() {
  var list = this.wave.getEnemyList();

  for(var i = 0; i < list.length; i++) {
    for(var j = 0; j < this.bulletList.length; j++) {
      var b = this.bulletList[j];
      var e = list[i];

      if(e == undefined || b == undefined)
        continue

      var d = {
        x : (b.size.x + e.size.x) / 2,
        y : (b.size.y + e.size.y) / 2,
      }

      if(Math.abs(b.poz.x - e.poz.x) < d.x &&
         Math.abs(b.poz.y - e.poz.y) < d.y) {
          var dmg = this.bulletList[j].dmg;
          this.bulletList.splice(j, 1);
          list[i].hp -= dmg;
          if(list[i].hp <= 0) {
            list.splice(i, 1);
            this.player.score += 10;
          }
      }//if
    }//for
  }//for

  this.wave.setEnemyList(list);
  var list = this.wave.getEnemyList();
    for(var j = 0; j < this.enemyBulletList.length; j++) {
      var b = this.enemyBulletList[j];
      var p = this.player.poz;
      var size = this.player.size;

      if(b == undefined)
        continue

      var d = {
        x : (b.size.x + size.x) / 2,
        y : (b.size.y + size.y) / 2,
      }

      if(Math.abs(b.poz.x - p.x) < d.x &&
         Math.abs(b.poz.y - p.y) < d.y) {
           this.enemyBulletList.splice(j, 1)
           this.player.lives -= 1;
      }//if
  }//for
}

Engine.prototype.drawScore = function() {
  ctx.fillStyle = 'red';
  ctx.font = "15px Arial";
  ctx.fillText("Score: "+ this.player.score, 500, 25);
}
