class Rope{
    constructor(bodyA, pointB){
        var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:1.2,
        length:250
        }
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var pos=this.rope.bodyA.position;
        var pointB=this.rope.pointB;
        line(pos.x,pos.y,pointB.x,pointB.y);
    }
}