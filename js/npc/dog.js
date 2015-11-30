function Dog(x, y) {
    this.x = x;
    this.y = y;
    this.spriteSheet = new Bitmap('./img/sprites.png');
    this.animations = [
        [1, 0, 0, 33, 33], // walk left
        [1, 33, 33, 33, 33], // walk right
        [1, 0, 33, 33, 33], // jump left
        [1, 33, 0, 33, 33] // jump right
    ];
    this.current = ((this.frame % this.animations[this.dir][0]) * this.animations[this.dir][3]) +this.animations[this.dir][1];
};

Player.prototype.update = function(controls, map) {
