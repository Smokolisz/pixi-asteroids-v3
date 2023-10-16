import * as PIXI from 'pixi.js'
import Player from './Player/Player';
import app from './app/app';
import Asteroid from './Asteroid/Asteroid';
import getRandomInt from './helpers/getRandomInt';

let player = new Player();


let asteroids = [];
for(let i=0; i<5;i++) {

    createAsteroid()
}

// Listen for animate update
app.ticker.add((delta) =>
{
    player.control();
    player.move(delta);

    for(let i=0; i < asteroids.length; i++) {
        asteroids[i].move(delta);
    }
});

setInterval(() => {
    createAsteroid();
}, 200);

function createAsteroid()
{
    let x = app.screen.width + 100;
    let y = getRandomInt(0, app.screen.height);

    let vX = getRandomInt(-100, -400)/100;
    let vY = getRandomInt(-100, 100)/100;

    let asteroid = new Asteroid(x, y, vX, vY, .1, .01);
    asteroids.push(asteroid);
}