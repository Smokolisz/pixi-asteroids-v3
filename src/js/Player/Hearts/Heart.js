import * as PIXI from 'pixi.js';
import { uiContainer } from "../../app/app";

class Heart
{
    constructor()
    {
        this.sprite = PIXI.Sprite.from("heart.png");
        this.sprite.anchor.set(0.5);
        this.sprite.x = -100;
        this.sprite.y = -100
        this.sprite.scale.set(0.15);
        this.sprite.visible = false;

        uiContainer.addChild(this.sprite);
    }

    setPosition(x, y)
    {
        this.sprite.x = x;
        this.sprite.y = y;
        this.sprite.visible = true;
    }

    destroy()
    {
        this.sprite.visible = false;
        uiContainer.removeChild(this.sprite);
        this.sprite = null;
    }
}

export default Heart;
