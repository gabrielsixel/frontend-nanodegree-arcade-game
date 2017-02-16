frontend-nanodegree-arcade-game
===============================
#Arcade Game

This game is fork of the [frontend-nanodegree-arcade-game](https://github.com/udacity/frontend-nanodegree-arcade-game) from Udacity Front-End Nanodegree and is a HTML Canvas and JavaScript Frogger clone.

##How to play

Clone the repository and open the index.html file.

##Goal

The goal of the game is to reach the top title on the canvas, you can do this by moving the player left, right, up and down, avoiding colision with the **GIANT BUGS**.

You can compete with your's  friends how can go the most Level's.

##Giant Bugs

On Level 0 three enemys will randomly span at one of the three stone rows, with a random moving speed, reaching the end of the canvans will re-span a new Enemy.

##Level's

Every time the player reaches the top a new level will be reach, reseting the player back to the grass tiles, at a random location and a new Enemy will span.

Every time the Player is hit by a Enemy, there will be one less enemy (minimun of three enemies) and it will lose a level.

Students should use this [rubric](https://review.udacity.com/#!/projects/2696458597/rubric) for self-checking their submission. Make sure the functions you write are **object-oriented** - either class functions (like Player and Enemy) or class prototype functions such as Enemy.prototype.checkCollisions, and that the keyword 'this' is used appropriately within your class and class prototype functions to refer to the object the function is called upon. Also be sure that the **readme.md** file is updated with your instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).
