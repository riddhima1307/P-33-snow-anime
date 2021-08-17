const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backgroundimg;
var girl; var girlimg;
var ground ; 
var engine , world;

function preload(){
 
backgroundimg = loadImage("snow2.jpg");
girlimg = loadImage("P-33_img-removebg-preview.png")

}



function setup() {
  createCanvas(1200,600);

  engine= Engine.create();
  world=engine.world;

  ground= createSprite(600,580,1500,10);
  ground.visible=false;

  girl = createSprite(400,500,50,50);
  girl.addImage(girlimg);
  girl.scale = 0.5;

  ball1= new snowfall(200,200);
  Engine.run(engine)

 
  
}

function draw() {
  background(backgroundimg);  

  ball1.display();

  if (keyDown("space")){
   girl.velocityY=-2;
  }
  else{
    girl.velocityY=0;
    girl.velocityX=0;
  }
  
   girl.velocityY=girl.velocityY+-0.8;
   girl.collide(ground);

  
   
  drawSprites();
  
}