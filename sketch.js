var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var engine,world;
var lblock,rblock,bblock;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	lblock = new Lblock(300,600,20,100);
	bblock = new Bblock(410,640,200,20);
	rblock = new Rblock(500,600,20,100);

	// The sprite approch.
	packageSprite=createSprite(width/2, 200, 10,10,);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor=color(255)


	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
}

function draw() {
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  //(Visualrepresent.1,Visualrepresent.2)rect will draw the rectangle or ground. 
  // For a sprite x and y coordinate are the center point of the sprite, but 
  // for rect x and y coordinate are the top left corner point.
  // Due to this reason we use rect(CENTER) so that x and y will be thought as the center point of the rect.
  rectMode(CENTER);
  fill("White");
  rect(width/2,650,width,10);
// (Visualrepresent.1,Visualrepresent.2) drawSprites would draw the sprite.
  lblock.display();
  bblock.display();
  rblock.display();
  drawSprites();
 
}

// keyPressed is recognised by the machine immediately, that is why you would not have to write it inside the draw Function just like you wouldn't for the setup function.
function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	//Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody ,false)
	// The thing that is assigned to right side would go before the left side.
	packageSprite.x = packageBody.position.x
	packageSprite.y = packageBody.position.y
  }
}



