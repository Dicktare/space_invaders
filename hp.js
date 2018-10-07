function Hp(poz, size) {
  this.poz = poz;
  this.size = size;
  this.img = null;
  this.spriteSize = null;
  this.init();
}

Hp.prototype.init = function() {
    var data = playerData
    this.img = new Image(data.imgSize.x, data.imgSize.y);
    this.img.src = data.src;
    this.spriteSize = data.sprite;
}

Hp.prototype.render = function() {
  var poz = this.getLeftCorner();
  ctx.drawImage(
    this.img,
    0, 0,
    this.spriteSize.x, this.spriteSize.y,
    poz.x, poz.y,
    this.size.x, this.size.y
  )
}

Hp.prototype.getLeftCorner = function() {
  return {
    x: this.poz.x - this.size.x / 2,
    y: this.poz.y - this.size.y / 2
  }
}
