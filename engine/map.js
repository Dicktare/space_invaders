function Map() {
  this.img = null;
  this.init();
}

/*
  Set the data for the background image.
*/
Map.prototype.init = function() {
  var data = mapBg;
  this.img = new Image(data.imgSize.x, data.imgSize.y);
  this.img.src = data.src;
}

/*
 Simple render function that draws the map background.
*/
Map.prototype.render = function() {
  ctx.drawImage(this.img, 0, 0);
}
