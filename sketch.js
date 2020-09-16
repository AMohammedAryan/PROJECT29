const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand, stand2;
var polygon;

var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var block10, block11, block12, block13, block14, block15, block16, block17, block18;
var constraint;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  stand = new Ground(300, 325, 290, 20);
  stand2 = new Ground(625, 175, 290, 20);

  polygon = new Polygon(50, 100, 50);

  block1 = new Block(300, 295, 50, 50);
  block2 = new Block(350, 295, 50, 50);
  block3 = new Block(400, 295, 50, 50);
  block4 = new Block(250, 295, 50, 50);
  block5 = new Block(200, 295, 50, 50);

  block6 = new Block(300, 245, 50, 50);
  block7 = new Block(350, 245, 50, 50);
  block8 = new Block(250, 245, 50, 50);

  block9 = new Block(300, 195, 50, 50);

  block10 = new Block(625, 145, 50, 50);
  block11 = new Block(675, 145, 50, 50);
  block12 = new Block(725, 145, 50, 50);
  block13 = new Block(575, 145, 50, 50);
  block14 = new Block(525, 145, 50, 50);

  block15 = new Block(625, 95, 50, 50);
  block16 = new Block(675, 95, 50, 50);
  block17 = new Block(575, 95, 50, 50);

  block18 = new Block(625, 45, 50, 50);

  constraint = new SlingShot(polygon.body, {x:50, y:100});
}

function draw() {
  background(0);  

  Engine.update(engine);

  stand.display();
  stand2.display();

  polygon.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  block6.display();
  block7.display();
  block8.display();

  block9.display();

  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();

  block15.display();
  block16.display();
  block17.display();

  block18.display();

  //constraint.display();

  drawSprites();
}

function mouseDragged(){
  Body.setPosition(polygon.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
  constraint.fly();
}