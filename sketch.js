const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload(){

	
}

function setup() {
	createCanvas(1536, 710);


	engine = Engine.create();
	world = engine.world;

	ball = new Ball(200,500,20)

	ground = new Ground(1100,450,400,20)

	box1 = new Box(950, 400, 50,50)
	box2 = new Box(1000, 400, 50,50)
	box3 = new Box(1050, 400, 50,50)
	box4 = new Box(1100, 400, 50,50)
	box5 = new Box(1150, 400, 50,50)
	box6 = new Box(1200, 400, 50,50)
	box7 = new Box(1250, 400, 50,50)

	boxa1 = new Box(1000, 300, 50,50)
	boxa2 = new Box(1050, 300, 50,50)
	boxa3 = new Box(1100, 300, 50,50)
	boxa4 = new Box(1150, 300, 50,50)
	boxa5 = new Box(1200, 300, 50,50)

	boxb1 = new Box(1050, 200, 50,50)
	boxb2 = new Box(1100, 200, 50,50)
	boxb3 = new Box(1150, 200, 50,50)

	boxc1 = new Box(1100, 100, 50,50)
  sling  = new Chain (ball.body,{x:190, y:450})
  score = 0
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  boxa1.display();
  boxa2.display();
  boxa3.display();
  boxa4.display();
  boxa5.display();

  boxb1.display();
  boxb2.display();
  boxb3.display();

  boxc1.display();



  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();

  boxa1.score();
  boxa2.score();
  boxa3.score();
  boxa4.score();
  boxa5.score();

  boxb1.score();
  boxb2.score();
  boxb3.score();

  boxc1.score();


  ball.display();
  sling.display();
  fill("white");
  textSize(26);
  text("Score:" + score, 750, 40);

  
}

function keyPressed(){
  if (keyCode == 32){
      sling.attach(ball.body);   
  }
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x:mouseX , y:mouseY})

}

function mouseReleased(){
    sling.fly()
}






