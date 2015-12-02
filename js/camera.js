import { Bitmap } from './spriteloader';

export default function Camera(canvas) {
    this.ctx = canvas.getContext('2d');
    this.width = canvas.width;
    this.height = canvas.height;
};

Camera.prototype.drawCharacter = function(character) {
    this.ctx.drawImage(character.spriteSheet.image, character.current, character.animations[character.dir][2], character.animations[character.dir][3], character.animations[character.dir][4], character.x, character.y, 33, 33);
};

Camera.prototype.drawMap = function(map) {
    for (var i = 0; i < map.blocks.length; ++i) {
        this.ctx.drawImage(map.spriteSheet.image, map.blocks[i][0], map.blocks[i][1], map.blocks[i][2], map.blocks[i][3], map.blocks[i][4], map.blocks[i][5], map.blocks[i][2], map.blocks[i][3]);
    }
};

Camera.prototype.drawBackground = function() {
    this.background = new Bitmap('./img/kok-forest/main-bg1.png');
    //this.block = new Bitmap('./block.png');
    this.ctx.drawImage(this.background.image, 0, 0);
};

Camera.prototype.render = function(player, map) {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.drawBackground();
    this.drawMap(map);
    this.drawCharacter(player);
};
