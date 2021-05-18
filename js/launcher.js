class launcher{
    constructor(body,annchor)
    {

        var options={ bodyA:body,
            pointB:annchor,
            stiffness:0.004,
            length:1
        
        }

        this.bodyA = body
        this.pointB = annchor
        this.launcher=Constraint.create(options)
        World.add(world,this.launcher)
    }

    attach(body){
        this.launcher.bodyA=body;
    }

    fly()
    {
        this.launcher.bodyA=null;
    }

    display()
    {
        if(this.launcher.bodyA)
        {
            var pointA = this.bodyA.position;
            var pointB = this.pointB

            strokeWeight(2);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}
