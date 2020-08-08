class SlingShot{

    constructor(body1,body2){
        var options = {
            bodyA: body1,
            bodyB: body2,
            length: 10,
            stiffness: 0.04


        }

       this.SlingShot = Constraint.create(options)
        World.add(world,this.SlingShot)

    }

    display(){
        var pointA = this.SlingShot.bodyA.position
        var pointB = this.SlingShot.bodyB.position
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}