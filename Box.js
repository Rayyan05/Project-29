class Box{
    constructor(x,y,width,height){
        var options = {
            'restitution': 0.1,
		}
//'this' refer to object created using the class. we always use 'this' within the constructor
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    //define a function
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push()
         translate(pos.x,pos.y);
         rotate(angle);
        rectMode(CENTER);
       fill(255)
        rect(0,0, this.width, this.height);
        pop()
    }

}

