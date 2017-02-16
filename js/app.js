// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    // The x position of the enemy on the screen at a random location between
    // the first two columns
    // Creates the enemy outside the view area to a more smooth experience
    this.x = (Math.floor(Math.random() * 2) * 101) - 202;
    // The y position of the enemy on the screen at a random location between
    // the three stone tiles
    this.y = (Math.floor(Math.random() * 3) + 1) * 70;
    // The random speed variant in each enemy
    // can be change to relate to a  user "level"
    this.speed = Math.floor(Math.random() * 4) + 1;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + (101 * dt * this.speed);
    // Test if the Enemy position is over 505 pixes (canvas width)
    // and if so creates new enemy over the old one
    for (var i = 0; i < allEnemies.length; i++) {
        if (allEnemies[i].x > 505)
            allEnemies[i] = new Enemy();
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Enemy.prototype.removeEnemy = function() {
    allEnemies.pop();
    console.log(allEnemies.length);
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function () {
    this.sprite = 'images/char-boy.png';
    this.x = 2 * 101;
    this.y = 5 * 78;
    this.level = 1;
    this.dead = false;
};

// Update the player's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the Player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.reset = function() {
    if (!this.dead) {
        this.level++;
        //enemy.addEnemy();
    } else {
        if (this.level !== 0)
            this.level--;
        this.dead = false;
    }
    this.x = (Math.floor(Math.random() * 5)) * 101;
    this.y =  390;
};

Player.prototype.handleInput = function(allowedKeys) {
    if (allowedKeys == "left")
        this.x === 0   ? this.x = 0   : this.x = this.x - 101;

    if(allowedKeys == "right")
        this.x === 404 ? this.x = 404 : this.x = this.x + 101;

    if(allowedKeys == "up")
        this.y = this.y - 83;

    if(allowedKeys == "down")
        this.y === 390 ? this.y = 390 : this.y = this.y +  83;
};

var ScoreBoard = function() {
    this.x = 380;
    this.y = 40;
};

ScoreBoard.prototype.render = function() {
    ctx.clearRect(460, 0, 45, 50);
    ctx.font = "30px Arial";
    ctx.fillText("Level: " + player.level, this.x, this.y);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [
    new Enemy(),
    new Enemy(),
    new Enemy(),
];
var player = new Player();
var scoreBoard = new ScoreBoard();



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
