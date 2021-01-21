class Striker{
    constructor(x,y,radius){
        var options = {
            'isStatic':false,
            'restitution':1.0
        }
        this.body = Bodies.circle(x,y,radius,options)
        this.radius = radius
        World.add(world,this.body)
    }

    display(){
      
        var pos = this.body.position
        var angle = this.body.angle

        ellipseMode(RADIUS)
        fill("yellow")
        ellipse(pos.x,pos.y,this.radius)
        
    }
}