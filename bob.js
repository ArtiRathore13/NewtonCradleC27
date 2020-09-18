class Bob{
    constructor(x,y,radius){
        var options={
            density:0.8,
            isStatic:false,
            restitution:1,
            airfriction:0
        }

        this.body=Bodies.circle(x,y,radius/2,options);
        this.radius=radius;

        World.add(world,this.body);

    }

    display(){
        var pos=this.body.position;
       //ellipseMode(RADIUS);
        fill ("blue");
        ellipse(pos.x,pos.y,this.radius);
    
    }
}