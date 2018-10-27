function Star(imgData, poz, size, timer, updateTick) {
  this.poz = poz;
  this.size = size;

  this.img = new Image(imgData.imgSize.x, imgData.imgSize.y);
  this.img.src = imgData.src;

  this.spriteSize = imgData.sprite;

  this.spriteNum = imgData.spriteNum;
  this.spriteIndex = 0;
  this.lastTimeUpdated = timer;
  this.updateTick = updateTick;
}

Star.prototype.render = function () {
  ctx.drawImage(this.img,
                this.spriteIndex * this.spriteSize.x, 0,
                this.spriteSize.x, this.spriteSize.x,
                this.poz.x, this.poz.y,
                this.size.x, this.size.y);
};

Star.prototype.update = function () {
  var now = new Date();
  if(now - this.lastTimeUpdated > this.updateTick) {
    this.lastTimeUpdated = now;
    this.spriteIndex += 1;
    this.spriteIndex %= this.spriteNum;
  }
}
