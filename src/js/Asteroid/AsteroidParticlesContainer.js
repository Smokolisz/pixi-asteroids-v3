import getRandomInt from "../helpers/getRandomInt";
import AsteroidParticle from "./AsteroidParticle";

class AsteroidParticlesContainer
{
    constructor(x, y)
    {
        this.particles = [];
        this.age = 0;

        const particlesAmount = getRandomInt(10, 15);
        for(let i=0; i<particlesAmount; i++) {
            const particle = AsteroidParticle.createRandomParticle(x, y);
            this.particles.push(particle);
        }
    }

    increaseAge(delta)
    {
        this.age += delta;
    }

    checkAge()
    {
        if(this.age > 100) {
            return true;
        }

        return false;
    }

    animate(delta)
    {
        for(let i=0; i<this.particles.length; i++) {
            this.particles[i].move(delta);
        }
    }

    destroy()
    {
        for(let i=0; i<this.particles.length; i++) {
            this.particles[i].destroy();
        }

        this.particles = [];
    }
}

export default AsteroidParticlesContainer;
