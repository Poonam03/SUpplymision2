const Engine = Matter.Engine;
const World=Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopter,hImage,helicopterBody, packageSprite, pImage, packageBody, wall1, wall2, wall3;

function preload()
{
	hImage=loadImage("helicopter.png");
	pImage=loadImage("package.png");
}

function setup()
{
	canvas=createCanvas(600,400);

	packageSprite=createSprite(width/2,80,20,20);
	packageSprite.addImage(pImage);
	packageSprite.scale=0.1;

	helicopter=createSprite(300,80,20,20);
	helicopter.addImage(hImage);
	helicopter.scale=0.5;

	engine=Engine.create();
	world=engine.world;

	
	helicopterBody=Bodies.rectangle(300,100,200,200,options={isStatic: true});
	World.add(world,helicopterBody);
	
	packageBody=Bodies.rectangle(300,100,20,20,options={isStatic: true});
	World.add(world,packageBody);

	ground=Bodies.rectangle(300,400,600,70,options={isStatic: true});
	World.add(world,ground);

	wall1=new Box( 300,380, 200,20);
	wall2= new Box( 200,340, 20,100);
	wall3= new Box( 400,340, 20,100);
	
}

function draw()
{
	background("black");
	Engine.update(engine);

	packageSprite.x=packageBody.position.x;
	packageSprite.y=packageBody.position.y;

	wall1.display();
	wall2.display();
	wall3.display();
	
	//helicopter.x=helicopterBody.position.x;
	//helicopter.y=helicopterBody.position.y;

	drawSprites();
}

function keyPressed()
{  
	if (keyCode === LEFT_ARROW) {

		helicopter.x=helicopter.x-20;    
		translation={x:-20,y:0}
		//packageSprite.x=helicopterBody.position.x;
		Matter.Body.translate(packageBody, translation)
	 } 
	 else if (keyCode === RIGHT_ARROW) {
		helicopter.x=helicopter.x+20;
		translation={x:20,y:0}
		//packageSprite.x=helicopterBody.position.x;
		Matter.Body.translate(packageBody, translation)
	  }
	    else if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody,false);
		console.log(packageBody.position.y)
	  }
	
}
