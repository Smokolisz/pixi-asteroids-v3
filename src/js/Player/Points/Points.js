import * as PIXI from 'pixi.js';
import { uiContainer } from '../../app/app';

class Points
{
    constructor()
    {
        this.points = 0;

        this.pointsText = new PIXI.Text(
            'Points: 0', {
                fontFamily: 'Press Start 2P',
                fontSize: 20,
                fill: 'white',
                align: 'left',
            }
        );
        this.pointsText.position.set(20, 20);
        uiContainer.addChild(this.pointsText);
    }

    addPoints(amount = 1)
    {
        this.points += amount;
        this.pointsText.text = "Points: " + this.points;
    }
}

export default Points;
