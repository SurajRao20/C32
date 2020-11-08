class Ball {
  constructor(x, y,radius) {
    var options = {
        'restitution':0.8,
        'friction':4,
        'density':1.2
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(191,13,13);
    strokeWeight(4);
    stroke(255,2,2);
    circle(0, 0, this.radius*2);
    pop();
  }
};
