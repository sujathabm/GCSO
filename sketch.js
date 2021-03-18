var car1;
var car2;
var car3;
var car4;
var speed;
var weight;
var sideWall1
var sideWall2;
var sideWall3;
var sideWall4;
var deformation
function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  speed1 = random(55,90)
  speed2 = random(55,90)
  speed3 = random(55,90)
  speed4 = random(55,90)
  weight1 = random(400,1500)
  weight2 = random(400,1500)
  weight3 = random(400,1500)
  weight4 = random(400,1500)
  car1 = createSprite(50,50,50,10)
  sideWall1 = createSprite(100,100,3200,10);
  car2 = createSprite(50,150,50,10)
 sideWall2 = createSprite(100,200,3200,10);
 car3 = createSprite(50,250,50,10)
 sideWall3 = createSprite(100,300,3200,10);
 car4 = createSprite(50,350,50,10)
 sideWall4 = createSprite(100,400,3200,20);
wall1 = createSprite(1500,50,20,70);
wall2 = createSprite(1500,150,20,70);
wall3 = createSprite(1500,250,20,70);
wall4 = createSprite(1500,350,20,70);

}

function draw() {
  background(255,255,255);  
  car1.velocityX = speed1
  car2.velocityX = speed2
  car3.velocityX = speed3
  car4.velocityX = speed4

if(wall1.x-car1.x<(car1.width+wall1.width)/2)
{
  car1.velocityX = 0;
  deformation = 0.5*weight1*speed1*speed1/22509;
  if(deformation>180)
  {
    car1.shapeColor = color(255,0,0);
  }
  if(deformation<180 && deformation>100)
  {
    car1.shapeColor = color(230,230,0);
  }
  if( deformation<100)
  {
    car1.shapeColor = color(0,255,0);
  }
}
if(wall2.x-car2.x<(car2.width+wall2.width)/2)
{
  car2.velocityX = 0;
  deformation = 0.5*weight2*speed2*speed2/22509;
  if(deformation>180)
  {
    car2.shapeColor = color(255,0,0);
  }
  if(deformation<180 && deformation>100)
  {
    car2.shapeColor = color(230,230,0);
  }
  if( deformation<100)
  {
    car2.shapeColor = color(0,255,0);
  }
}
  if(wall3.x-car3.x<(car3.width+wall3.width)/2)
{
  car3.velocityX = 0;
  deformation = 0.5*weight3*speed3*speed3/22509;
  if(deformation>180)
  {
    car3.shapeColor = color(255,0,0);
  }
  if(deformation<180 && deformation>100)
  {
    car3.shapeColor = color(230,230,0);
  }
  if( deformation<100)
  {
    car3.shapeColor = color(0,255,0);
  }
}
    if(wall4.x-car4.x<(car4.width+wall4.width)/2)
{
  car4.velocityX = 0;
  deformation = 0.5*weight4*speed4*speed4/22509;
  if(deformation>180)
  {
    car4.shapeColor = color(255,0,0);
  }
  if(deformation<180 && deformation>100)
  {
    car4.shapeColor = color(230,230,0);
  }
  if( deformation<100)
  {
    car4.shapeColor = color(0,255,0);
  }
}
  drawSprites();
}