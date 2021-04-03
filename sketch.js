var fixedRect,movingRect;
var gamingObject1,gamingObject2,gamingObject3,gamingObject4;

function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  
  gamingObject1=createSprite(300,150,30,50);
  gamingObject2=createSprite(400,250,90,80);
  gamingObject3=createSprite(350,350,60,70);
  gamingObject4=createSprite(500,450,50,40);
}

function draw() {
  background(255,255,255); 
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(isTouching(movingRect,gamingObject3)){
    movingRect.shapeColor="red";
    gamingObject3.shapeColor="red";
  }else{
    movingRect.shapeColor="green";
    gamingObject3.shapeColor="green";
  }  drawSprites();
}

function isTouching(object1,Object2){
  if(object1.x-Object2.x<Object2.width/2+object1.width/2 
    && Object2.x-object1.x<Object2.width/2+object1.width/2 
    && Object2.y-object1.y<Object2.height/2+object1.height/2 
    && object1.y-Object2.y<object1.height/2+Object2.height/2)
    {
  return true
  }
  else{return false}
}
