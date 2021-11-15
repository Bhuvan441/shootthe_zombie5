var backgroundimg;
var player;
var playerimg;
var playeraiming;
var bullet,bulletimg, bulletGroup;
var zombie, zombieimg, zombieGroup;
var score = 0;

function preload(){
backgroundimg = loadImage('assets/bg.png');
playerimg = loadImage('assets/shooter_2.png');
playeraiming = loadImage('assets/shooter_3.png');
bulletimg = loadImage('assets/bullet.png');
zombieimg = loadAnimation('assets/zombie.png','assets/zombie1.png','assets/zombie2.png','assets/zombie3.png');


}

function setup(){
  createCanvas(windowWidth,windowHeight);
bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
bg.scale = 2.8;
bg.velocityX = -3;
bg.addImage("bgimg",backgroundimg);

player = createSprite(displayWidth-1400,displayHeight-370,20,20);
player.scale = 0.5;
player.addImage("playerimage",playeraiming);






zombieGroup = new Group();
bulletGroup = new Group();
}


function draw() {
  background(0);
  
  
  


if(bg.x < 0){
  bg.x = bg.width/2;
}
if(bulletGroup.isTouching(zombieGroup)){
  zombieGroup.destroyEach();
  bulletGroup.destroyEach();
  score = score + 1;
}


if(keyDown("SPACE")){
  
  bullet.velocityX = 20;
  bullet.visible = true;
}




spawnZombie();
bullet1();
  drawSprites();
  textSize(30);
  fill("black");
  text("Score: "+score,1400,100);

}

function spawnZombie(){
  if(frameCount%150 === 0){
    zombie = createSprite(displayWidth+1330,displayHeight+120,20,20);
    zombie.addAnimation("zombieimage",zombieimg);
    zombie.velocityX = -3;
    zombie.scale = 3.5;
    zombieGroup.add(zombie);
    }

  

}

function bullet1(){
  bullet = createSprite(300,490,77,75);
  bullet.scale = 0.05;
  bullet.addImage("bulletimage",bulletimg);
  bullet.visible = false;
  bulletGroup.add(bullet);

  
}