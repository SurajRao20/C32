class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0,
          'friction' : 3
      }
      this.body = Bodies.rectangle(x, y, width, height,options);
      this.width = width
      this.height = height
      this.visibility = 255

      
      World.add(world, this.body);
    }
    display(){

    if(this.body.speed < 9){
        var pos = this.body.position;
        push ();
        translate (pos.x, pos.y);
        rotate (this.body.angle)
        rectMode(CENTER);
        fill(0,179,196);
        rect(0, 0, this.width, this.height);
        pop();
        
      }
    
    else{
      World.remove(world, this.body)
      var pos = this.body.position
      push()
      this.visibility = this.visibility-5
      fill(0,179,196, this.visibility)
      rect( pos.x, pos.y, this.width, this.height);
      pop()
    }
  }

  score(){
    if(this.visibility <0 && this.visibility >- 105)
    score++;
  }

}

