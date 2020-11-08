class Chain{
    constructor(bodyA, point2){
        var options = {
            bodyA: bodyA,
            pointB: point2,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Matter.Constraint.create(options);
        World.add(world, this.chain);
    }

    attach(body){
        this.chain.bodyA = body
    }

    fly(){
        this.chain.bodyA = null
    }

    display(){
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.chain.pointB;
            strokeWeight(4);
            stroke(255,255,255)
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}