class AddPointsForTime
{
    static elapsed = 0;

    static handleAddingPointsForTime(delta, points)
    {
        this.elapsed += delta;

        if(this.elapsed > 60) {

            points.addPoints();
            this.elapsed -= 60;
        }
    }
}

export default AddPointsForTime;