import * as PIXI from 'pixi.js'
import app from "../app/app";

class FlameTrail
{
    constructor(parentSprite)
    {
        this.parentSprite = parentSprite;

        this.flames = [];
    }

    animate(visible, stops)
    {
        if(this.parentSprite || !visible || stops) {
            return;
        }


    }
}

export default FlameTrail;