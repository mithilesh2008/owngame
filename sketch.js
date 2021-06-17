
var monkey , monkey_running
var banana ,bananaImage,obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;
var Ground ,invisible;

function preload(){
  
  
  monkey_running = loadAnimation("girl.png")
  
  bananaImage = loadImage("fly.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  PLAY=1;
  GameState=PLAY;
  END=0;
  
  FoodGroup=new Group();
  obstacleGroup=new Group ();
  
  monkey = createSprite(70,400,50,50);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.6;
  
  Ground=createSprite(250,400,1000,10);
  Ground.x=Ground.width/2;
  Ground.velocityX=-2;
  invisible=createSprite(250,407,1000,10)
  invisible.x=Ground.width/2;
}


function draw() {
background("green")
  
  if(GameState===PLAY){
    Food();
  Obstacle();
    Ground.velocityX=-2;
  if (Ground.x<0){
    Ground.x=Ground.width/2;
  }
    if (invisible.x<0){
      invisible.x=invisible.width/2;
    }
    
    
  if(keyDown("space")&&monkey.isTouching(Ground)) {
    monkey.velocityY = -20;
  }
   
    score=Math.round(frameCount/3);
    survivalTime=Math.ceil(frameCount/frameRate());
    Ground.velocityX=-(5+2*score/100);
                      
     if(FoodGroup.isTouching(monkey)){
       FoodGroup.destroyEach();
     }                 
                      
                       
    if(obstacleGroup.isTouching(monkey)) {
      GameState=END;
    }                 
  }                    
   
  else if (GameState === END){
    Ground.velocityX = 0;
    invisible.velocityX = 0;
    obstacleGroup.setVelocityXEach(0);
  FoodGroup.setVelocityXEach(0);
    FoodGroup.setLifetimeEach(1);
    obstacleGroup.setLifetimeEach(1);
    
  }
    monkey.velocityY = monkey.velocityY+0.9;                  
    monkey.collide(invisible);                  
      
  textSize(20);
  text("score;"+score,400,50);
  
    textSize(20);
    text("time taken;"+survivalTime,100,50);
      drawSprites();
}       

                      
 function Food(){
   if(frameCount%80===0){
     var banana=createSprite(400,200,10,20);
     banana.addImage("banana",bananaImage);
     banana.velocityX=-(5+2*score/100);
     banana.y=Math.round(random(120,200));
     banana.scale=0.3;
     FoodGroup.add(banana);
     FoodGroup.setLifetimeEach(100);
   }
 }                     
                      
                      
  function Obstacle(){
   if(frameCount%200===0){
     var obstacle=createSprite(500,375,23,32);
      obstacle.addImage("obstacle",obstacleImage);
    obstacle.velocityX=-(5 + 2 * score /100);
     
     obstacle.scale=0.3;
  obstacleGroup.add(obstacle);
obstacleGroup.setLifetimeEach(100);
   }
 }                                         
                      
                      
                                                                            
    
    
    
    
    
  







