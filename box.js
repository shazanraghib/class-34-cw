class Box{
    constructor(x ,y ,width, height){
        var options={
            friction:0.4,
            density:0.1,
            restitution:0.3
        }
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x, y, width ,height, options);
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        rotate(angle);
        strokeWeight(4);
        stroke("green");
        fill("white");
        
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}