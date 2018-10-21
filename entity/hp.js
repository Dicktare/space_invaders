function Hp(poz, size) {
  Box.call(this, poz, size);
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
