var tom, jerry;
var BgImg;
var tomImg, jerryImg;
var mouseTeasing;
function preload() {
    BgImg.loadImage("garden.png")
    tomImg.loadImage(tom, "cat1.png,cat2.png,cat3.png,cat4.png");
    jerryImg.loadImage(jerry, "mouse1.png,mouse3.png,mouse4.png");
    mouseTeasing.loadAnimation(teasing, "mouse2.png");
}

function setup(){
    createCanvas(1000,800);
    background(BgImg); 
    
    tom = createSprite (10,20,300,200);
    tom.addImage (tomImg);
    tom.scale= 0.5;
    tom.velocityX = 4;
    tom.velocityY = 5; 
    
    jerry.createSprite (15,25,100,200);
    jerry.addImage (jerryImg);
    jerry.scale = 0.5;
    jerry.velocityX = 5;
    jerry.velocityY = 5;

    console.log ();
}

function draw() {

    background(255);
   if (cat.x - mouse.x (cat.width - mouse.width)/2) {

   }



    drawSprites();
}


function keyPressed(){

  if (keycode === LEFT_ARROW) {
      addAnimation("mouse teasing", mouseImg2);
      jerry.changeAnimation("mouse teasing" );
      jerry.frameDelay = 25;
  }


}
