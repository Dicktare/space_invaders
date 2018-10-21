function Enemy(poz, size, speed , border, type) {
  Box.call(this, poz, size);
  this.hp = 10;
  this.vector = 1;
  this.speed = speed;

  this.leftBorder = border.left;
  this.rightBorder = border.right;
  this.canShoot = false;
  this.fireRate = 2500;
  this.lastShoot = 0;
  this.init(type);
}

Enemy.prototype.init = function(type) {
  var data = monsters[type];
  (type == 'monster1') ? this.canShoot = true : this.canShoot = false;

  this.img = new Image(data.imgSize.x, data.imgSize.y);
  this.img.src = data.src;

  this.spriteSize = data.sprite;
  this.spriteIndex = 0;
  this.maxSprites = 2;

  this.lastUpdate = 0;
  this.updateTime = Timer.updateTime;
}

Enemy.prototype.render = function() {
  ctx.fillStyle = 'yellow';
  var poz = this.getLeftCorner();

  var poz = this.getLeftCorner();
  ctx.drawImage(
    this.img,
    this.spriteIndex * this.spriteSize.x, 0,
    this.spriteSize.x, this.spriteSize.y,
    poz.x, poz.y,
    this.size.x, this.size.y
  )
}

Enemy.prototype.move = function() {
  this.poz.x += this.vector * this.speed;
}

Enemy.prototype.updateSprite = function() {
  var now = new Date();
  if( now - this.lastUpdate > this.updateTime ) {
     this.lastUpdate = now;
     this.spriteIndex  += 1;
     this.spriteIndex %= this.maxSprites;
  }
}
