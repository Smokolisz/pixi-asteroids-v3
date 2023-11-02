import * as PIXI from 'pixi.js';
import getRandomInt from '../helpers/getRandomInt';
import { asteroidsContainer } from '../app/app';

class AsteroidParticle
{
    constructor(x, y, angle, speed)
    {
        this.sprite = PIXI.Sprite.from('asteroid.png');

        this.sprite.anchor.set(0.5);
        this.sprite.scale.set(0.02);
        this.sprite.rotation = angle;

        this.sprite.x = x;
        this.sprite.y = y;

        this.speed = speed;

        asteroidsContainer.addChild(this.sprite);
    }

    static createRandomParticle(x, y)
    {
        const angle = getRandomInt(0, 360);
        const speed = getRandomInt(50, 300) / 100;


        return new this(x, y, angle, speed);
    }

    move(delta)
    {
        this.sprite.x += Math.cos(this.sprite.rotation) * this.speed * delta;
        this.sprite.y += Math.sin(this.sprite.rotation) * this.speed * delta;

        this.sprite.alpha -= 0.01;
    }

    destroy()
    {
        this.sprite.visible = false;
        asteroidsContainer.removeChild(this.sprite);
        this.sprite = null;
    }
}

export default AsteroidParticle;
