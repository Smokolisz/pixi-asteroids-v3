import Heart from "./Heart";

class Hearts
{
    constructor(heartsAmount)
    {
        this.hearts = [];

        for(let i=0; i<heartsAmount; i++) {
            this.addHeart();
        }

        this.displayHearts();
    }

    displayHearts()
    {
        for(let i=0; i<this.hearts.length; i++) {
            this.hearts[i].setPosition(35 + (i*50), 70);
        }
    }

    addHeart()
    {
        let heart = new Heart();
        this.hearts.push(heart);
    }

    removeHeart()
    {
        let index = this.hearts.length-1;
        this.hearts[index].destroy();
        this.hearts.splice(index, 1);
    }

    isDead()
    {
        if(this.hearts.length <= 0) {
            return true;
        }

        return false;
    }
}

export default Hearts;
