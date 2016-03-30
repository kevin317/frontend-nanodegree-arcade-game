// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed*dt;

    if (this.x < player.x + 65 &&
        this.x + 75 > player.x &&
        this.y < player.y + 70 &&
        50 + this.y > player.y) {
        player.reset();
    }

    if (this.x > 500) {
        this.x = -100;
        this.speed = Math.floor((Math.random()*500)+100);
    }


};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x,y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
};

Player.prototype.update = function() {

};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {
    var charlist = ['images/char-boy.png','images/char-princess-girl.png'];
    if (key == 'left' && this.x > 50) {
        this.x-=95;
    } else if (key == 'up' && this.y >= 100) {
        this.y-=83;
    } else if (key == 'right' && this.x < 300) {
        this.x+=95;
    } else if (key == 'down' && this.y < 400) {
        this.y+=83;
    } else if (key == 'up' && this.y < 100) {
        this.reset();
    }
};

Player.prototype.reset = function() {
    this.x = 202;
    this.y = 405;
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var e1 = new Enemy(0,60,Math.floor((Math.random()*500)+100));
var e2 = new Enemy(101,140,Math.floor((Math.random()*500)+100));
var e3 = new Enemy(404,230,Math.floor((Math.random()*500)+100));
var allEnemies = [e1,e2,e3];
var player = new Player(202,405);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
