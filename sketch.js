
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1200,200,30);
	mango3=new mango(1150,310,30);
	mango4=new mango(1000,130,30);
	mango5=new mango(900,270,30);
	
	stone=new Stone(250,500,20)

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);
	
	slingshot = new Slingshot(stone.body,{x:243,y:412});

}



function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  slingshot.display();

  groundObject.display();

  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)
}


function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingshot.fly();
}

function detectCollision(lstone,lmango){

	if(lstone.body.position.x- lmango.body.position.x <lmango.diametre + lstone.diametre
		&& lmango.body.position.x - lstone.body.position.x  < lmango.diametre + lstone.diametre
		&&lstone.body.position.y -lmango.body.position.y < lmango.diametre + lstone.diametre
		&& lmango.body.position.y - lstone.body.position.y < lmango.diametre + lstone.diametre){
		Matter.Body.setStatic(lmango.body,false);
	}

}
 
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:243,y:412});
		chain.Launch(stone.body);
	}
}