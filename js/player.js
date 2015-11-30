var walkSpeed = 5;
var jumpHight = 16;

function Player(x, y, direction, frame) {
    this.x = x;
    this.y = y;
    this.jump = false;
    this.velocity = 0;
    this.dir = direction;
    this.frame = frame;
    this.spriteSheet = new Bitmap('./img/link.png');
    this.animations = [
        [1, 0, 0, 33, 33], // walk left
        [1, 33, 33, 33, 33], // walk right
        [1, 0, 33, 33, 33], // jump left
        [1, 33, 0, 33, 33] // jump right
    ];
    this.current = ((this.frame % this.animations[this.dir][0]) * this.animations[this.dir][3]) +this.animations[this.dir][1];
};

Player.prototype.update = function(controls, map) {

    if (controls.up) {
        this.dir = 3;
        this.y -= walkSpeed;

        if (this.frame < this.animations[this.dir][0] - 1) {
            ++this.frame;
            this.current = ((this.frame % this.animations[this.dir][0]) * this.animations[this.dir][3]) +this.animations[this.dir][1];
        }
        else {
            this.frame = 0;
            this.current = ((this.frame % this.animations[this.dir][0]) * this.animations[this.dir][3]) +this.animations[this.dir][1];
        }
    };
    
    if (controls.down) {
        this.dir = 2;
        this.y += walkSpeed;

        if (this.frame < this.animations[this.dir][0] - 1) {
            ++this.frame;
            this.current = ((this.frame % this.animations[this.dir][0]) * this.animations[this.dir][3]) +this.animations[this.dir][1];
        }
        else {
            this.frame = 0;
            this.current = ((this.frame % this.animations[this.dir][0]) * this.animations[this.dir][3]) +this.animations[this.dir][1];
        }
    };

    if (controls.left) {
        this.dir = 0;
        this.x -= walkSpeed;

        if (this.frame < this.animations[this.dir][0] - 1) {
            ++this.frame;
            this.current = ((this.frame % this.animations[this.dir][0]) * this.animations[this.dir][3]) +this.animations[this.dir][1];
        }
        else {
            this.frame = 0;
            this.current = ((this.frame % this.animations[this.dir][0]) * this.animations[this.dir][3]) +this.animations[this.dir][1];
        }
    };

    if (controls.right) {
        this.dir = 1;
        this.x += walkSpeed;

        if (this.frame < this.animations[this.dir][0] - 1) {
            ++this.frame;
            this.current = ((this.frame % this.animations[this.dir][0]) * this.animations[this.dir][3]) + this.animations[this.dir][1];
        }
        else {
            this.frame = 0;
            this.current = ((this.frame % this.animations[this.dir][0]) * this.animations[this.dir][3]) + this.animations[this.dir][1];
        }
    };
/**
    if (controls.jump && !this.jump) {
        this.velocity = jumpHight*-1; 
        this.jump = true;
        this.dir = this.dir + 2;

        if (this.frame < this.animations[this.dir][0] - 1) {
            ++this.frame;
            this.current = ((this.frame % this.animations[this.dir][0]) * this.animations[this.dir][3]) + this.animations[this.dir][1];
        }
        else {
            this.frame = 0;
            this.current = ((this.frame % this.animations[this.dir][0]) * this.animations[this.dir][3]) + this.animations[this.dir][1];
        }
    }; **/
/**
    this.velocity++;
    this.y += this.velocity;
**/
    if (!controls.right && !controls.left && !this.jump) {
        this.current = this.animations[this.dir][1];
    };
};
