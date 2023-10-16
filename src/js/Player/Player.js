import * as PIXI from 'pixi.js'
import app from '../app/app';
import keyboard from '../helpers/keyboard';
import FlameTrail from '../FlameTrail/FlameTrail';

class Player
{
    constructor()
    {
        this.sprite = PIXI.Sprite.from('https://pixijs.com/assets/bunny.png');

        this.sprite.anchor.set(0.5);

        this.sprite.x = 100;
        this.sprite.y = app.screen.height / 2;

        app.stage.addChild(this.sprite);

        this.velocityX = 0;
        this.velocityY = 0;

        this.accelerating = false;
        this.stops = true;

        this.flameTrail = new FlameTrail(this.sprite);
    }

    control()
    {
        let keyPressed = false;

        if(keyboard.up.isDown) {
            this.velocityY -= this.speed;
            keyPressed = true;
        }
        if(keyboard.down.isDown) {
            this.velocityY += this.speed;
            keyPressed = true;
        }
        if(keyboard.right.isDown) {
            this.velocityX += this.speed;
            keyPressed = true;
        }
        if(keyboard.left.isDown) {
            this.velocityX -= this.speed;
            keyPressed = true;
        }

        this.accelerating = keyPressed;
    }

    move(delta)
    {
        this.dontMoveOutOfBounds();

        this.sprite.x += this.velocityX * delta;
        this.sprite.y += this.velocityY * delta;

        this.slowDown();


        if(this.velocityX == 0, this.velocityY == 0) {
            this.stops = true;
        }
        this.flameTrail.animate(this.accelerating, this.stops);
    }

    dontMoveOutOfBounds() {
        const worldBorder = 25;

        if(this.sprite.x < worldBorder) {
            this.sprite.x = worldBorder;
        }
        if(this.sprite.x > app.screen.width-worldBorder) {
            this.sprite.x = app.screen.width-worldBorder;
        }
        if(this.sprite.y < 25) {
            this.sprite.y = worldBorder;
        }
        if(this.sprite.y > app.screen.height-worldBorder) {
            this.sprite.y = app.screen.height-worldBorder;
        }
    }

    slowDown()
    {
        if(this.velocityX > this.speed/2) {
            this.velocityX -= this.speed/2;
        } else if(this.velocityX < -this.speed/2) {
            this.velocityX += this.speed/2;
        } else {
            this.velocityX = 0;
        }

        if(this.velocityY > this.speed/2) {
            this.velocityY -= this.speed/2;
        } else if(this.velocityY < -this.speed/2) {
            this.velocityY += this.speed/2;
        } else {
            this.velocityY = 0;
        }
    }

    get speed()
    {
        return .5;
    }

    isAccelerating()
    {
        return this.accelerating;
    }
}

export default Player;