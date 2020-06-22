var bullet,wall,thickness;
var speed,weight;
var damage


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 50);
 
  
  wall.depth = 1
  bullet.depth = wall.depth+1

  wall.shapeColor = color(80,80,80)
  bullet.shapeColor = "white"

speed = random(223,321)
weight = random(30,52)
thickness = random(22,83)

wall = createSprite(1200,200,thickness,height/2)

bullet.velocityX = speed;

damage = 0.5 * weight * speed * speed / thickness * thickness * thickness




}

function draw() {
  background("black"); 
  
  if(isTouching(bullet,wall) && (damage < 10 )){
    bullet.x = 50
    bullet.velocityX = 0
    bullet.shapeColor = color(0,255,0)
  }

  if(isTouching(bullet,wall) && (damage >= 10 ) ){
    bullet.x =  50
    bullet.velocityX = 0
    wall.shapeColor = color(255,0,0)
  }

  drawSprites();
}