import Asteroid from "../Asteroid/Asteroid";
import DestroyAsteroidsOutOfBounds from "../Asteroid/DestroyAsteroidsOutOfBounds";
import Player from "../Player/Player";
import app from "../app/app";

class Stage
{
    constructor(levelConfig)
    {
        this.player = null;
        this.levelConfig = levelConfig;
        this.asteroids = [];
        this.asteroidsArrivalDelay = levelConfig.asteroidsBegginingArrivalDelay;
    }

    init()
    {
        this.player = new Player();

        this.handleAsteroids();

        app.ticker.add(delta => this.tick(delta));
    }

    tick(delta)
    {
        this.player.control();
        this.player.move(delta);

        for(let i=0; i < this.asteroids.length; i++) {
            this.asteroids[i].move(delta);
        }

        DestroyAsteroidsOutOfBounds.checkIfAsteroidIsOutOfBounds(this.asteroids);
    }

    addAsteroid()
    {
        const asteroid = Asteroid.createRandomAsteroid();
        this.asteroids.push(asteroid);
    }

    handleAsteroids()
    {
        setTimeout(() => {
            this.addAsteroid();
            this.handleAsteroids();

            this.asteroidsArrivalDelay -= this.levelConfig.asteroidsDelayReducer;
            if(this.asteroidsArrivalDelay < this.levelConfig.asteroidsArrivalMinimumDelay) {
                this.asteroidsArrivalDelay = this.levelConfig.asteroidsArrivalMinimumDelay;
            }

        }, this.asteroidsArrivalDelay);
    }
}

export default Stage;
