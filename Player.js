class Player
{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
        this.spt = createSprite(200, 200, 100, 100);
        this.spt.shapeColor = "yellow";
    }
    move(xdir,ydir){
        this.spt.x += xdir*grid;
        this.spt.y += ydir*grid;
    }
};