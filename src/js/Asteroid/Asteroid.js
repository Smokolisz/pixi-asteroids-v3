import * as PIXI from 'pixi.js'
import app from '../app/app';
import getRandomInt from '../helpers/getRandomInt';

class Asteroid
{
    constructor(x, y, vX, vY, size, rotationSpeed = 1)
    {
        this.sprite = PIXI.Sprite.from('asteroid.png');

        this.sprite.anchor.set(0.5);
        this.sprite.scale.set(size);

        this.sprite.x = x;
        this.sprite.y = y;

        app.stage.addChild(this.sprite);

        this.velocityX = vX;
        this.velocityY = vY;

        this.rotationSpeed = rotationSpeed;
    }

    move(delta)
    {
        this.sprite.x += this.velocityX * delta;
        this.sprite.y += this.velocityY * delta;

        this.sprite.rotation += this.rotationSpeed * delta;
    }

    static createRandomAsteroid()
    {
        let x = app.screen.width + 100;
        let y = getRandomInt(0, app.screen.height);

        let vX = getRandomInt(-100, -400)/100;
        let vY = getRandomInt(-100, 100)/100;

        let asteroid = new this(x, y, vX, vY, .1, .01);
        
        return asteroid;
    }

    destroy()
    {
        this.sprite.visible = false;
        app.stage.removeChild(this.sprite);
        this.sprite = null;
    }
}

export default Asteroid;
