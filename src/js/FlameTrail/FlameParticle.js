import * as PIXI from 'pixi.js';
import { particleContainer } from "../app/app";

class FlameParticle
{
    constructor(x, y, angle)
    {
        const space = -10;

        const radians = angle * (Math.PI / 180);

        const spaceX = space * Math.cos(radians);
        const spaceY = -space * Math.sin(radians);

        const newX = x + spaceX;
        const newY = y + spaceY;;


        this.sprite = PIXI.Sprite.from("flameParticle.png");
        this.sprite.anchor.set(0.5);
        this.sprite.x = newX;
        this.sprite.y = newY;
        this.sprite.rotation = angle;
        this.sprite.tint = 0xFF0000;
        this.sprite.zIndex = -1;
        this.sprite.zOrder = -1;

        this.scaleCounter = 0;
        this.colorCounter = 0;
        this.colorTransitionDuration = 10;
        this.targetColor = 0xFFFF00;
        this.startColor = this.sprite.tint;

        particleContainer.addChild(this.sprite);
    }

    move(delta)
    {
        this.sprite.x += Math.cos(this.sprite.rotation) * this.speed * delta;
        this.sprite.y += Math.sin(this.sprite.rotation) * this.speed * delta;

        this.colorCounter += delta;
        if (this.counter >= this.colorTransitionDuration) {
            this.sprite.tint = this.targetColor;
        } else {
            const progress = this.colorCounter / this.colorTransitionDuration;
            this.sprite.tint = this.lerpColor(this.startColor, this.targetColor, progress);
        }

        this.scaleCounter += delta;
        if(this.scaleCounter > 1) {
            this.scaleCounter = 0;
            this.sprite.scale.set(this.sprite.scale.x-0.05, this.sprite.scale.y-0.11);
        }
    }

    get speed() {
        return .01;
    }

    lerpColor(startColor, endColor, progress) {
        const startR = (startColor >> 16) & 0xFF;
        const startG = (startColor >> 8) & 0xFF;
        const startB = startColor & 0xFF;
      
        const endR = (endColor >> 16) & 0xFF;
        const endG = (endColor >> 8) & 0xFF;
        const endB = endColor & 0xFF;
      
        const lerpedR = Math.floor(startR + (endR - startR) * progress);
        const lerpedG = Math.floor(startG + (endG - startG) * progress);
        const lerpedB = Math.floor(startB + (endB - startB) * progress);
      
        return (lerpedR << 16) | (lerpedG << 8) | lerpedB;
    }

    getSprite()
    {
        return this.sprite;
    }

    delete()
    {
        this.sprite.visible = false;
        particleContainer.removeChild(this.sprite);
        this.sprite = null;
    }
}

export default FlameParticle;
