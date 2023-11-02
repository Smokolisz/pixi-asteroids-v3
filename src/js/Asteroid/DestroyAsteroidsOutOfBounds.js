import { app } from "../app/app";

class DestroyAsteroidsOutOfBounds
{
    static checkIfAsteroidIsOutOfBounds(asteroids)
    {
        for(let i=0; i<asteroids.length; i++) {

            if(asteroids[i].sprite.x < -200) {
                asteroids[i].destroy();
                asteroids.splice(i, 1);
            }
        }
    }
}

export default DestroyAsteroidsOutOfBounds;
