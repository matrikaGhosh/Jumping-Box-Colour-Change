class wall4 {
    constructor(x, y, width, height){
 this.body = bodies.rectangle(x, y, width, height, options)
 this.width = width;
 this.height = height;

World.add(world, this.body)
}

}
display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    fill("blue")
    pop()
    
}







