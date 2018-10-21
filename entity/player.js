function Player() {
  Box.call(this, {x:300, y:470}, {x:50, y:50})
  this.velocity = {
    "up":false,
    "down":false,
    "left":false,
    "right":false
  };
  
  this.speed = 7;
  this.score = 0;
  this.lives = 3;
  this.hpList = [];
  this.init();
}//Player

Player.prototype.init = function() {
  var data = playerData
  this.img = new Image(data.imgSize.x, data.imgSize.y);
  this.img.src = data.src;

  this.spriteSize = data.sprite;
  this.spriteIndex = 0;

  this.lastUpdate = 0;
  this.updateTime = Timer.updateTime;

  var start = {
    x: 25,
    y: 25
  }

  var offset = {
    x: 2,
    y: 10
  }

  var size = {
    x: 30,
    y: 30
  }

  for(var i = 1; i <= this.lives; i++) {
    var poz = {
      x: start.x + (size.x + offset.x) * (i -1),
      y: start.y
    }
    var l = new Hp(poz, size);
    this.hpList.push(l);
  }
}

Player.prototype.renderHp = function() {
  for(var i = 0; i < this.lives; i++) {
    this.hpList[i].render();
  }
}

Player.prototype.render = function() {
  ctx.fillStyle = 'black';
  var poz = this.getLeftCorner();
  ctx.drawImage(
    this.img,
    this.spriteIndex * this.spriteSize.x, 0,
    this.spriteSize.x, this.spriteSize.y,
    poz.x, poz.y,
    this.size.x, this.size.y
  )
  this.renderHp();
}

Player.prototype.updatePlayerVelocity = function(key, value) {
  if(key == 'd')
    this.velocity["right"] = value;

  if(key == 'a')
    this.velocity["left"] = value;

  if(key == 'w')
    this.velocity["up"] = value;

  if(key == 's')
    this.velocity["down"] = value;
}

Player.prototype.updatePlayerPosition = function() {
    if(this.velocity["up"]) {
      this.poz.y -= this.speed;
    }

    if(this.velocity["down"]) {
      this.poz.y += this.speed;
    }

    if(this.velocity["left"]) {
      this.poz.x -= this.speed;
    }

    if(this.velocity["right"]) {
      this.poz.x += this.speed;
    }
}
