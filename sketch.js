var car,wall;
var speed,weight;
var deformation;

function setup() {
 createCanvas(1600,400);

 car=createSprite(50,200,50,50);
 wall=createSprite(1500,200,60,height/2);

 speed=random(55,90);
 weight=random(400,1500);

 deformation = (0.5 * weight * speed * speed) / 22500;


 car.velocityX= speed;

  
}

function draw() {
  background(255,255,255); 

  
  if(wall.x - car.x <= car.width / 2 + wall.width / 2 
    && car.x - wall.x <= wall.width / 2 + car.width / 2 
    
    && deformation > 180){
      car.velocityX = 0;
    
    car.shapeColor = "red";
  }
  else if(wall.x - car.x <= car.width / 2 + wall.width / 2 
    && car.x - wall.x <= wall.width / 2 + car.width / 2 && deformation <= 180

  && deformation >= 100){
    car.velocityX = 0;
    
    car.shapeColor = "yellow";
  }
  else if(wall.x - car.x <= car.width / 2 + wall.width / 2 
    && car.x - wall.x <= wall.width / 2 + car.width / 2 && deformation < 180

    && deformation < 100){
      car.velocityX = 0;
    
    car.shapeColor = "green";
  }

  


  drawSprites();

}
