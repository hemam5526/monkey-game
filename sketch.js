
var ground
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var survivalTime=0;

function preload(){  
monkey_running =           loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
bananaImage = loadImage("banana.png");

obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,400);  
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1
  
ground=createSprite(400,350,900,10);
ground.velocityX=-4;
ground.x=ground.width/2;
console.log(ground.x)

obstacleGroup=new Group();
bananaGroup=new Group();

}


function draw() {
background("255");
  
food();
obstacles();
  

if(ground.x<0){
ground.x=ground.width/2;  
}  

monkey.velocityY = monkey.velocityY +0.9;  
monkey.collide(ground);
  


if(keyDown("space")){
monkey.velocityY=-12;
}
  
text("Score: " +score,500,50)  
stroke("white");
fill("white");
textSize(20);
  

  


  
  
stroke("black"); 
textSize(20);  
fill("black");  
survivalTime=Math.ceil(frameCount/frameRate())  
text("Survival Time: "+ survivalTime,100,50); 
  
if(obstacleGroup.isTouching(monkey)){
ground.velocityX=0; 
monkey.velocityY=0; 
  
obstacleGroup.setVelocityXEach(0);
bananaGroup.setVelocityXEach(0);
obstacleGroup.setLifetimeEach(-1); 
bananaGroup.setLifetimeEach(-1);   
  
}

  

  
  


drawSprites();  
}

function food(){
if(World.frameCount%80===0){
  banana=createSprite(500,200,20,20);
  banana.addAnimation("fruit",bananaImage)
  banana.y=Math.round(random(120,200));
  banana.scale=0.1
  banana.velocityX=-4;
  banana.setLifetime=50;    
  bananaGroup.add(banana);
}
} 
function obstacles (){
if(World.frameCount%300==0){
obstacle = createSprite(500,330,10,40);
obstacle.addAnimation("rival",obstacleImage)
obstacle.scale=0.1 
obstacle.velocityX=-4;
obstacle.setLifetime=50;
  
obstacleGroup.add(obstacle);
 

}
}
