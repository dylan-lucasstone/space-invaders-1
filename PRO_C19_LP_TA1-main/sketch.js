var background,bullet,meteor,spaceship;
var bgImg,bulletImg,meteorImg,ssImg;
var bulletGroup,meteorGroup
var score = 0;

function preload() {
  bgImg = loadImage('./assets/background.jpg');
  bulletImg = loadImage('./assets/bullet.png');
  meteorImg = loadImage('./assets/meteor.png');
  ssImg = loadImage('./assets/spaceship.png');
}
function setup(){
  createCanvas(1600,800);
  bg = createSprite(300,300);
  bg.addImage(bgImg);
  bg.velocityY = 1;
  ship = createSprite(800,650);
  ship.scale = 0.3
  ship.addImage(ssImg);
  meteorGroup = new Group()
}

function draw(){
  background(0);

  if(bg.y > 600){
    bg.y = 500;
  }
  if(keyDown('left_arrow')){
    ship.x = ship.x - 3;
  }

  if(keyDown('right_arrow')){
   ship.x = ship.x + 3;
  }

  if(keyDown('space')){
    bullet = createSprite(ship.x,ship.y - 100);
    bullet.addImage(bulletImg);
    bullet.scale = 0.1
    bullet.velocityY = -2
  }
  
  spawnMeteors();
  if(meteorGroup.isTouching(bullet)){ 
    bullet.destroy();
    meteorGroup.remove(meteor);
    score++;
   }
  drawSprites();
  textSize(30);
  text('Score:  '+score,230,230);


}

function spawnMeteors(){
  if(frameCount%150==0){

  meteor = createSprite(200,-50);
  meteor.addImage(meteorImg);
  meteor.velocityY = 1;
  meteor.scale = 0.4;
  meteor.x = Math.round(random(300,1400));
  meteorGroup.add(meteor);

  }

}