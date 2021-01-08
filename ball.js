class Ball{
    constructor(x ,y , radius){
        var options={
            friction:0.4,
            density:1
        }
        this.radius=radius;
        
        this.body=Bodies.circle(x, y, radius, options);
        World.add(world,this.body)
    }
    display(){
        fill("brown");
        var pos=this.body.position;
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.radius, this.radius);
    }
}