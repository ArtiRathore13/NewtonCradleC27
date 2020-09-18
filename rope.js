class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){

        this.offsetX=offsetX;
        this.offsetY=offsetY;

        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX,y:this.offsetY},
            stiffness:0,
            length:300
        }

        
        this.rope=Constraint.create(options);

        World.add(world,this.rope);
    }

    display(){
        
        var ptA=this.rope.bodyA.position;
        var ptB=this.rope.bodyB.position;
        //push ();
        strokeWeight(2);

        var Anchor1X=ptA.x;
        var Anchor1Y=ptA.y;

        var Anchor2X=ptB.x+this.offsetX;
        var Anchor2Y=ptB.y+this.offsetY;

        line (Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
        //pop ();
    }
}