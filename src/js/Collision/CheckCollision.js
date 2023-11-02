class CheckCollision
{
    static circle(sprite1, sprite2)
    {
        const x1 = sprite1.x;
        const y1 = sprite1.y;
        const radius1 = sprite1.width / 2;

        const x2 = sprite2.x;
        const y2 = sprite2.y;
        const radius2 = sprite2.width / 2;

        // calculate distance between sprite's middle point
        const distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2) +10;

        // check, if the distance is smaller or equal sum of radii
        if (distance <= radius1 + radius2) {
            return true; // collision
        }

        return false;
    }

    static box(sprite1, sprite2)
    {
        // position and size of first sprite
        const x1 = sprite1.x;
        const y1 = sprite1.y;
        const width1 = sprite1.width;
        const height1 = sprite1.height;

        // position and size of second sprite
        const x2 = sprite2.x;
        const y2 = sprite2.y;
        const width2 = sprite2.width;
        const height2 = sprite2.height;

        // box collision
        if (
            x1 < x2 + width2 &&
            x1 + width1 > x2 &&
            y1 < y2 + height2 &&
            y1 + height1 > y2
        ) {
            return true; // collision
        }

        return false;
    }
}

export default CheckCollision;
