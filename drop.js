class drops {

    constructor(x,y){
        var option = {
            friction : 0.01,
            restituition : 0.1
        }
        this.drop = Bodies.circle(x,y,5,option)
        this.r = 5
        World.add (world, this.drop)
    }
    update ()
{
    if(this.drop.position.y > height){
        Matter.drop.setPosition(this.drop,{x : random(0,400),y : radom(0,400)})
    }
}
display(){

  fill ("blue")
  ellipseMode(RADIUS)
  ellipse(this.drop.position.x,this.drop.position.x,this.r,this.r)

}
}