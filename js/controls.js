function Controls() {
    this.codes = {37: 'left', 38: 'up', 40: 'down', 39: 'right', 32: 'jump'};
    this.states = {'left': false, 'right': false, 'jump': false};

    document.addEventListener('keydown', this.onKey.bind(this, true), false);
    document.addEventListener('keyup', this.onKey.bind(this, false), false);
};

Controls.prototype.onKey = function(val, e) {
    var state = this.codes[e.keyCode];
    if (typeof state === 'undefined') return;
    this.states[state] = val;
};
