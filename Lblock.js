class Lblock{
    constructor(x,y){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,20,100,options);
        this.width = 20
        this.height = 100
        World.add(world,this.body)
    }
    display() {
    var pos= this.body.position
    var angle= this.body.angle
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill("Red");
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
    }
}