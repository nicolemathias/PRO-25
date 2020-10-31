var paperSprite,paperObj;
var paperBody,ground1;

var dustbin1,dustbin2,dustbin3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	dustbin1 = new dustbin(1200,650)
  
	paperObj= new paper(200,450,40)

	ground1 = new ground(width/2,670,width,20)
	
	var render = Render.create({
		element: document.body,engine:engine,options:{width:1200,height:700,wireframes: false}})
	Engine.run(engine);
}

function draw() {
  background("grey");
  rectMode(CENTER);
  
  paperObj.display();
  ground1.display();
  dustbin1.display();

  //Matter.Body.setStatic(helicopterSprite,false);
}

function keyPressed(){
 if (keyCode === UP_ARROW){

	Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:85,y:-85})
 }};
