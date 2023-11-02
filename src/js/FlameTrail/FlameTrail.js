import FlameParticle from './FlameParticle';

class FlameTrail
{
    constructor(parentSprite)
    {
        this.parentSprite = parentSprite;

        this.flames = [];

        this.flameDelay = 0;
    }

    animate(vx, vy, delta, visible)
    {
        for(let i=0; i < this.flames.length; i++) { 
            this.flames[i].move(delta);
        }
        for(let i=0; i < this.flames.length; i++) { 
            if(this.shouldDeleteParticle(i)) {
                this.deleteParticle(i);
                break;
            }
        }

        if(!this.parentSprite || visible == false) {
            return;
        }

        if(this.flameDelay > 1) {
            this.addFlameParticle(vx, vy);
            this.flameDelay = 0;
        }
        this.flameDelay += delta;
    }

    shouldDeleteParticle(index)
    {
        if(this.flames[index].getSprite().scale.x < 0.01 || this.flames[index].getSprite().scale.y < 0.01) {
            return true;
        }
        return false;
    }

    deleteParticle(index)
    {
        this.flames[index].delete();
        this.flames.splice(index, 1);
    }

    addFlameParticle(vx, vy)
    {
        const angleInRadians = Math.atan2(vy, vx);
        const angleInDegrees = -(angleInRadians * 180) / Math.PI;

        let flameParticle = new FlameParticle(this.parentSprite.x, this.parentSprite.y, angleInDegrees);
        this.flames.push(flameParticle);
    }
}

export default FlameTrail;
