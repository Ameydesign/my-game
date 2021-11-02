var spacebg,asteroid,battleship,earth,laser;

function preload(){
  spacebg = loadImage("./assests/sprite_space0.png");
  asteroid = loadImage("./assests/Asteroid.png");
  battleship = loadImage("./assests/Battleship.png")
  laser = loadImge("./assests/laser.png");
  earth = loadImage("./assests/earth.png");

}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(spacebg);

  battleship = createSprite(300, 200, 50, 50);
  battleship.addImage(battleship);
  
  asteroid = createSprite(400, 200, 20, 20);
  asteroid.addImage(asteroid);
  
  earth = createSprite(500, 300, 100, 100);
  earth.addImage(earth);
   

  drawSprites();
}