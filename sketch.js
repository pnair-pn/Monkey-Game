
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage, back;
var bananaGroup, obstacleGroup;
var score = 0
var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  bananaGroup = new Group();
  obstacleGroup = new Group();
}



function setup() {
  monk = createSprite(80,315,20,20);
  monk.addAnimation("moving", monkey_running)
  monk.scale = 0.1;

  ground = createSprite(400,350,900,10)
  ground.visible = true;
  ground.x = ground.width/2;
  console.log(ground.x)
}


function draw() {
  createCanvas(600,600);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score,500,50)
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: " + survivalTime, 100, 50);
  
  if (keyWentDown("space")){
    monk.velocityY = -12;  
  }
  monk.velocityY = monk.velocityY + 0.35;
    
  monk.collide(ground);
  
  food();
  obstacle();

  drawSprites();  
}

function food(){
  if (World.frameCount%80===0){
    ban = createSprite(600,Math.round(random(120,200),20,20));
    ban.addImage(bananaImage);
    ban.velocityX = -3;
    ban.lifetime = 500;
    ban.scale = 0.075;
    bananaGroup.add(ban);
  }
}

function obstacle(){
  if (World.frameCount%300===0){
    ob = createSprite(600,315,20,20);
    ob.addImage(obstacleImage);
    ob.scale = 0.15;
    ob.velocityX = -3;
    ob.lifetime = 500;
    obstacleGroup.add(ob);
  }   
}


