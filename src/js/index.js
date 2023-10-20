import * as PIXI from 'pixi.js'
import Player from './Player/Player';
import app from './app/app';
import Asteroid from './Asteroid/Asteroid';
import getRandomInt from './helpers/getRandomInt';
import Stage from './Stage/Stage';
import stages from './Stage/stages.json';

const stage = new Stage(stages[0]);
stage.init();


function testCollision()
{
    for(let i=0;i<asteroids.length;i++)
    {
        let collision = player.sprite.getBounds().intersects(asteroids[i].sprite.getBounds());
        console.log(collision, player.sprite.getBounds());
    }
}