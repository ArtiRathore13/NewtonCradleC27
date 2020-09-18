const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;

var roof1,bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
  createCanvas(1200,800);

  engine=Engine.create();
  world=engine.world;

  roof1= new  Roof(600,100,250,20);



  bob1= new Bob(520,400,40);
  bob2= new Bob(560,400,40);
  bob3= new Bob(600,400,40);
  bob4= new Bob(640,400,40);
  bob5= new Bob(680,400,40);


rope1=new Rope(bob1.body,roof1.body,(-40*2),0);
rope2=new Rope(bob2.body,roof1.body,-40,0);
rope3=new Rope(bob3.body,roof1.body,0,0);
rope4=new Rope(bob4.body,roof1.body,40,0);
rope5=new Rope(bob5.body,roof1.body,(40*2),0);

//Engine.run(engine);

}

function draw() {
  background("lightgrey");  

  Engine.update(engine);

  roof1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();



  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
 
}


function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.position,{x:-50,y:-45});
  }
}

/*

function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}

*/