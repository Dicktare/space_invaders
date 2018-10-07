function Bullet(poz, size, speed, type) {
  this.poz = poz;
  this.size = size;
  this.speed = speed;
  this.dmg = 5;
  this.init(type);
}

Bullet.prototype.init = function(type) {
  var data = bullets[type];
  this.img = new Image(data.imgSize.x, data.imgSize.y);
  this.img.src = data.src;
  this.spriteSize = data.sprite;
}

Bullet.prototype.render = function() {
 var poz = this.getLeftCorner();
 ctx.drawImage(
   this.img,
   0, 0,
   this.spriteSize.x, this.spriteSize.y,
   poz.x, poz.y,
   this.size.x, this.size.y
 )
}

Bullet.prototype.getLeftCorner = function() {
  return {
    x: this.poz.x - this.size.x / 2,
    y: this.poz.y - this.size.y / 2,
  }
}

Bullet.prototype.move = function(vector) {
  this.poz.y += vector * this.speed;
}
