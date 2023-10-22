import * as PIXI from 'pixi.js'
import app from '../app/app';

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

    delete()
    {
        this.sprite.visible = false;
        app.stage.removeChild(this.sprite);
        this.sprite = null;
    }
}

export default Asteroid;
