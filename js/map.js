import { Bitmap } from './spriteloader';

/**
	Build the map **/
export default function Map() {
    this.spriteSheet = new Bitmap('./img/sprites.png');
    this.blocks = [
        //topX, topY, width, height, x, y
		[0, 0, 25, 25, 30, 60],

    ]
};

/**
	Update the map, detect collision **/
Map.prototype.update = function(player) {
	/**
		For Debugging **/
	document.getElementById("player_x").innerHTML = player.x;
	document.getElementById("player_y").innerHTML = player.y;


	for (var i = 0; i < this.blocks.length; ++i) {
		if( (this.blocks[i][0] == 0) && (this.blocks[i][1] == 0) ) {
    /*	Left */
   		 	if( ((player.x < (this.blocks[i][4] - 11)) && (player.x > (this.blocks[i][4] - 25))) &&  /* if ( < 89 && > 82) */
    		((player.y < (this.blocks[i][5] - 11)) && (player.y > (this.blocks[i][5] - 25))) ) {
    			player.x = player.x - 10;
    /*	Right Side */
    		} else if( (player.x == this.blocks[i][4]) &&
    		((player.y < (this.blocks[i][5] - 11)) && (player.y > (this.blocks[i][5] - 25))) ) {
    			player.x = player.x + 10;
    /*	Bottom Side */
    		} else if( (player.x < this.blocks[i][4]) && (player.x > (this.blocks[i][4] - 16)) &&
    		(player.y < (this.blocks[i][5] + 10)) && (player.y > this.blocks[i][5]) ) {
    			player.y = player.y + 10;
    /*	Top Side */
    		} else if( ((player.x < this.blocks[i][4]) && (player.x > (this.blocks[i][4] - 16))) &&  /* this is fucky */
    		(player.y > (this.blocks[i][5] - 30)) && (player.y < this.blocks[i][5])) {
    			player.y = player.y - 10;
    		}
   	 	} else if( (this.blocks[i][0] == 33) && (this.blocks[i][1] == 33) ) {
   	 	/* an NPC, for Lulz
   	 	*/
   	 		if(this.blocks[i][5] > 100) {
   	 			this.blocks[i][5] = this.blocks[i][5] - 10;
   	 		} else if(this.blocks[i][5] == 100 && this.blocks[i][4] > 100 ) {
   	 			this.blocks[i][4] = this.blocks[i][4] - 15;
   	 		}

			document.getElementById("dog_x").innerHTML = this.blocks[i][4];
			document.getElementById("dog_y").innerHTML = this.blocks[i][5];
   	 	}
   	};
};
