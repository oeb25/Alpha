import Player from './player';
import Controls from './controls';
import Camera from './camera';
import Map from './map';

var display = document.getElementById('display');
var map = new Map();
var player = new Player(200, 400, 1, 0);
var controls = new Controls();
var camera = new Camera(display, map);

var start = function() {
  player.update(controls.states, map);
  map.update(player);
  camera.render(player, map);
};

setInterval(start, 60);
