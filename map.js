function Map() {
  this.init();
}

Map.prototype.init = function() {
  var data = mapBg
  this.img = new Image(data.imgSize.x, data.imgSize.y);
  this.img.src = data.src;
}

Map.prototype.render = function() {
  ctx.fillStyle ='blue';
  ctx.fillRect(0, 0, 600, 600);
  ctx.drawImage(this.img, 0, 0);
}
