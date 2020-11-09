class Umbrella {
    constructor(x, y) {
        var options = {
            isStatic: true
        }
        this.image = loadImage("WalkingFrame/walking_1.png");
        this.body = Bodies.circle(x, y, 50, options);
        this.radius = 50;
        World.add(world,this.body);
    }
    display() {
        //image(this.image,x,y);
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y + 70, 300, 300);
    }
}
