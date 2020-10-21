
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy,boyImage;
var stone,stoneImage;
var tree,treeImage;
var mango1,mango2,mango3,mango4,mango5;
var stoneobj;
var mango,mangoImage;
var ground


function preload()
{
	boyImage=loadImage(pluckingmangoes/boy.png);
	mangoImage=loadImage(pluckingmangoes/mango.png);
	stoneImage=loadImage(pluckingmangoes/stone.png);
	treeImage=loadImage(pluckingmangoes/tree.png);
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	boy=new boy(200,400,20,30);
	boy=addImage(boyImage);

	stoneObj= new stone();
	stoneObj.addImage(stoneImage)

	tree=new tree();
	tree.addImage(treeImage);

	ground=new ground();
	ground.addImage(groundImage);

	mango1=new mango1();
	mango1.addImage(mangoImage);

	mango2=new mango2();
	mango2.addImage(mangoImage);

	mango3=new mango3();
	mango3.addImage(mangoImage);

	mango4=new mango4();
	mango4.addImage(mangoImage);
  
	mango5=new mango5();
	mango5.addImage(mangoImage);
}


function draw() {
  rectMode(CENTER);
  background(0);
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  drawSprites();
 
}
function mouseDragged(){



}
function mouseRealesed(){



}
function detectollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position


	var distance=dist(stoneBody.position.x, stoneBody.position.y, mangoBodyPosition.x,mangoBodyPosition.y,)
	if(distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false);
	}


}
