import Asteroid from "../Asteroid/Asteroid";
import AsteroidParticlesContainer from "../Asteroid/AsteroidParticlesContainer";
import DestroyAsteroidsOutOfBounds from "../Asteroid/DestroyAsteroidsOutOfBounds";
import CheckCollision from "../Collision/CheckCollision";
import Player from "../Player/Player";
import AddPointsForTime from "../Player/Points/AddPointsForTime";
import Points from "../Player/Points/Points";
import { app } from "../app/app";

class Stage
{
    constructor(levelConfig)
    {
        this.player = null;
        this.levelConfig = levelConfig;
        this.asteroids = [];
        this.asteroidsArrivalDelay = levelConfig.asteroidsBegginingArrivalDelay;

        this.asteroidParticlesContainers = [];

        this.points = new Points();
    }

    init()
    {
        this.player = new Player(this.levelConfig.heartsAmount);

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
        this.checkPlayerCollisionWithAsteroids();


        for(let i=0; i<this.asteroidParticlesContainers.length; i++) {
            this.asteroidParticlesContainers[i].animate(delta);
            this.asteroidParticlesContainers[i].increaseAge(delta);
            if(this.asteroidParticlesContainers[i].checkAge()) {
                this.asteroidParticlesContainers[i].destroy();
                this.asteroidParticlesContainers.splice(i, 1);
                break;
            }
        }

        AddPointsForTime.handleAddingPointsForTime(delta, this.points);
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

    checkPlayerCollisionWithAsteroids()
    {
        for(let i=0; i<this.asteroids.length; i++) {

            const isCollision = CheckCollision.circle(this.player.sprite, this.asteroids[i].sprite);

            if(isCollision) {
                console.log(this.asteroids[i].sprite, this.asteroids[i].sprite);

                let asteroidParticlesContainer = new AsteroidParticlesContainer(this.asteroids[i].sprite.x, this.asteroids[i].sprite.y);
                this.asteroidParticlesContainers.push(asteroidParticlesContainer);

                this.player.hearts.removeHeart();
                this.asteroids[i].destroy();
                this.asteroids.splice(i, 1);
            }

            if(this.player.hearts.isDead()) {
                app.ticker.stop();
                console.log("GAME OVER");
            }
        }
    }

    addPointsForTime(delta)
    {
        
    }
}

export default Stage;
