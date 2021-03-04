var ball,ground;
var box1,box2,box3;
var paper1, DustbinImage;
 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
function preload(){
//load dustbin image here
    DustbinImage = loadImage("dustbingreen.png");
}
function setup() {
    var canvas=createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
 
    ground1 = new Ground(600,795,1200,20);
// have increased the size of the paper
    paper1 = new Paper(100,645,60);
//changed size and position to create dustbin box
    box1=new dustbin (650,780,110,20)
    box2=new dustbin (605,725,15,75)
    box3=new dustbin (690,725,15,75)
    
  
}
 
function draw() {
  background(0);
  Engine.update(engine);
 
// instead of displaying the boxes just display image exactly at box1 position, purpose creating boxes is that paper should stay inside due to box bodies. 
image(DustbinImage,650,610,150,180)
 paper1.display();
 
 ground1.display();
 
}
 
function keyPressed() {
 if (keyCode === UP_ARROW) {
 Matter.Body.applyForce(paper1.body,paper1.body.position,{x:100,y:-150});
  }
}
