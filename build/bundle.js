/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _player = __webpack_require__(1);

	var _player2 = _interopRequireDefault(_player);

	var _controls = __webpack_require__(3);

	var _controls2 = _interopRequireDefault(_controls);

	var _camera = __webpack_require__(4);

	var _camera2 = _interopRequireDefault(_camera);

	var _map = __webpack_require__(5);

	var _map2 = _interopRequireDefault(_map);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var display = document.getElementById('display');
	var map = new _map2.default();
	var player = new _player2.default(200, 400, 1, 0);
	var controls = new _controls2.default();
	var camera = new _camera2.default(display, map);

	var start = function start() {
	  player.update(controls.states, map);
	  map.update(player);
	  camera.render(player, map);
	};

	setInterval(start, 60);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = Player;

	var _spriteloader = __webpack_require__(2);

	var walkSpeed = 5;
	var jumpHight = 16;

	function Player(x, y, direction, frame) {
	    this.x = x;
	    this.y = y;
	    this.jump = false;
	    this.velocity = 0;
	    this.dir = direction;
	    this.frame = frame;
	    this.spriteSheet = new _spriteloader.Bitmap('./img/link.png');
	    this.animations = [[1, 0, 0, 33, 33], // walk left
	    [1, 33, 33, 33, 33], // walk right
	    [1, 0, 33, 33, 33], // jump left
	    [1, 33, 0, 33, 33] // jump right
	    ];
	    this.current = this.frame % this.animations[this.dir][0] * this.animations[this.dir][3] + this.animations[this.dir][1];
	};

	Player.prototype.update = function (controls, map) {

	    if (controls.up) {
	        this.dir = 3;
	        this.y -= walkSpeed;

	        if (this.frame < this.animations[this.dir][0] - 1) {
	            ++this.frame;
	            this.current = this.frame % this.animations[this.dir][0] * this.animations[this.dir][3] + this.animations[this.dir][1];
	        } else {
	            this.frame = 0;
	            this.current = this.frame % this.animations[this.dir][0] * this.animations[this.dir][3] + this.animations[this.dir][1];
	        }
	    };

	    if (controls.down) {
	        this.dir = 2;
	        this.y += walkSpeed;

	        if (this.frame < this.animations[this.dir][0] - 1) {
	            ++this.frame;
	            this.current = this.frame % this.animations[this.dir][0] * this.animations[this.dir][3] + this.animations[this.dir][1];
	        } else {
	            this.frame = 0;
	            this.current = this.frame % this.animations[this.dir][0] * this.animations[this.dir][3] + this.animations[this.dir][1];
	        }
	    };

	    if (controls.left) {
	        this.dir = 0;
	        this.x -= walkSpeed;

	        if (this.frame < this.animations[this.dir][0] - 1) {
	            ++this.frame;
	            this.current = this.frame % this.animations[this.dir][0] * this.animations[this.dir][3] + this.animations[this.dir][1];
	        } else {
	            this.frame = 0;
	            this.current = this.frame % this.animations[this.dir][0] * this.animations[this.dir][3] + this.animations[this.dir][1];
	        }
	    };

	    if (controls.right) {
	        this.dir = 1;
	        this.x += walkSpeed;

	        if (this.frame < this.animations[this.dir][0] - 1) {
	            ++this.frame;
	            this.current = this.frame % this.animations[this.dir][0] * this.animations[this.dir][3] + this.animations[this.dir][1];
	        } else {
	            this.frame = 0;
	            this.current = this.frame % this.animations[this.dir][0] * this.animations[this.dir][3] + this.animations[this.dir][1];
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

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Bitmap = Bitmap;
	function Bitmap(src, width, height) {
	    this.image = new Image();
	    this.image.src = src;
	    this.width = width;
	    this.height = height;
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = Controls;
	function Controls() {
	    this.codes = { 37: 'left', 38: 'up', 40: 'down', 39: 'right', 32: 'jump' };
	    this.states = { 'left': false, 'right': false, 'jump': false };

	    document.addEventListener('keydown', this.onKey.bind(this, true), false);
	    document.addEventListener('keyup', this.onKey.bind(this, false), false);
	};

	Controls.prototype.onKey = function (val, e) {
	    var state = this.codes[e.keyCode];
	    if (typeof state === 'undefined') return;
	    this.states[state] = val;
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = Camera;

	var _spriteloader = __webpack_require__(2);

	function Camera(canvas) {
	    this.ctx = canvas.getContext('2d');
	    this.width = canvas.width;
	    this.height = canvas.height;
	};

	Camera.prototype.drawCharacter = function (character) {
	    this.ctx.drawImage(character.spriteSheet.image, character.current, character.animations[character.dir][2], character.animations[character.dir][3], character.animations[character.dir][4], character.x, character.y, 33, 33);
	};

	Camera.prototype.drawMap = function (map) {
	    for (var i = 0; i < map.blocks.length; ++i) {
	        this.ctx.drawImage(map.spriteSheet.image, map.blocks[i][0], map.blocks[i][1], map.blocks[i][2], map.blocks[i][3], map.blocks[i][4], map.blocks[i][5], map.blocks[i][2], map.blocks[i][3]);
	    }
	};

	Camera.prototype.drawBackground = function () {
	    this.background = new _spriteloader.Bitmap('./img/kok-forest/main-bg1.png');
	    //this.block = new Bitmap('./block.png');
	    this.ctx.drawImage(this.background.image, 0, 0);
	};

	Camera.prototype.render = function (player, map) {
	    this.ctx.clearRect(0, 0, this.width, this.height);
	    this.drawBackground();
	    this.drawMap(map);
	    this.drawCharacter(player);
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Map;

	var _spriteloader = __webpack_require__(2);

	/**
		Build the map **/
	function Map() {
	  this.spriteSheet = new _spriteloader.Bitmap('./img/sprites.png');
	  this.blocks = [
	  //topX, topY, width, height, x, y
	  [0, 0, 25, 25, 30, 60]];
	};

	/**
		Update the map, detect collision **/
	Map.prototype.update = function (player) {
	  /**
	  	For Debugging **/
	  document.getElementById("player_x").innerHTML = player.x;
	  document.getElementById("player_y").innerHTML = player.y;

	  for (var i = 0; i < this.blocks.length; ++i) {
	    if (this.blocks[i][0] == 0 && this.blocks[i][1] == 0) {
	      /*	Left */
	      if (player.x < this.blocks[i][4] - 11 && player.x > this.blocks[i][4] - 25 && /* if ( < 89 && > 82) */
	      player.y < this.blocks[i][5] - 11 && player.y > this.blocks[i][5] - 25) {
	        player.x = player.x - 10;
	        /*	Right Side */
	      } else if (player.x == this.blocks[i][4] && player.y < this.blocks[i][5] - 11 && player.y > this.blocks[i][5] - 25) {
	          player.x = player.x + 10;
	          /*	Bottom Side */
	        } else if (player.x < this.blocks[i][4] && player.x > this.blocks[i][4] - 16 && player.y < this.blocks[i][5] + 10 && player.y > this.blocks[i][5]) {
	            player.y = player.y + 10;
	            /*	Top Side */
	          } else if (player.x < this.blocks[i][4] && player.x > this.blocks[i][4] - 16 && /* this is fucky */
	            player.y > this.blocks[i][5] - 30 && player.y < this.blocks[i][5]) {
	              player.y = player.y - 10;
	            }
	    } else if (this.blocks[i][0] == 33 && this.blocks[i][1] == 33) {
	      /* an NPC, for Lulz
	      */
	      if (this.blocks[i][5] > 100) {
	        this.blocks[i][5] = this.blocks[i][5] - 10;
	      } else if (this.blocks[i][5] == 100 && this.blocks[i][4] > 100) {
	        this.blocks[i][4] = this.blocks[i][4] - 15;
	      }

	      document.getElementById("dog_x").innerHTML = this.blocks[i][4];
	      document.getElementById("dog_y").innerHTML = this.blocks[i][5];
	    }
	  };
	};

/***/ }
/******/ ]);