var  wall , thickness;
var bullet , speed , weight;

function setup() {
  createCanvas(1600,400);
  

  speed=random(223 , 321);
  weight=random(30 , 52);

  bullet = createSprite(200 , 200 , 50 , 10);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  wall = createSprite( 1200 , 160 , thickness , 200);
  wall.shapeColor = (80 , 80 , 80);

  thickness = random(22 , 83);
}

function draw() {
  background("aqua");  

  damage();

  
  drawSprites();
}



function damage(){
  if(wall.x - bullet.x < (bullet.width + wall.width/2)){

    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/ (thickness * thickness * thickness);

    if(damage > 10){
      bullet.shapeColor = "red";
    }

    if(damage < 10 || damage === 10){
      bullet.shapeColor = "green";
    }

    
    
}
}