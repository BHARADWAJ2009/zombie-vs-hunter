var boy, boyImage, monster1,monster1Image, arrow, arrowImage,monster2,monster2Image,monster1Group,monster2Group;




function preload() {
  boyImage = loadImage("boy.png");
  arrowImage = loadImage("arrow.png")
   monster1Image = loadImage("monster.png")
   monster2Image = loadImage("monster2.png")





}

function setup() {
  createCanvas(1200, windowHeight);
  boy = createSprite(200, 340, 200, 300);
  boy.addImage(boyImage)
  boy.scale = 0.3
  monster1group = new Group();
  monster2Group = new Group();



}

function draw() {
  background(230);
  spawnZombie();
  spawnMonsterArrows();
  drawSprites();
}


function spawnArrow() {
  push()

  arrow = createSprite(boy.x, boy.y - 70, 60, 30);
  arrow.rotation = -9
  arrow.addImage(arrowImage);
  arrow.velocityX = +4
  arrow.scale = 0.4
  arrow.setCollider("rectangle", 0, 0, arrow.width, 10)
  pop()
}

function keyReleased (){
  if( keyCode === 32){
    spawnArrow()
  }
}

function spawnZombie() {
  if(frameCount %120===0){ 
    monster1 = createSprite(800,500,10,10);
    monster2 = createSprite(900,200,10,10);
    monster1.addImage(monster1Image);
    monster2.addImage(monster2Image);
    monster2.scale = 0.8
    monster1.scale = 0.6
    
  }
}

function spawnMonsterArrows() {
  var randomNo1 = round(random(1,60));
  var randomNo2 = round(random(1,60));
  if(frameCount %120===0){
    var arrow1 = createSprite(770,450)
    arrow1.addImage(arrowImage);
    arrow1.rotation = 180
    arrow1.scale = 0.5
  }
}

  




