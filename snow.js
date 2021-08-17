class snowfall{
    constructor (x,y){
        var options ={
        friction:1.0,
        restitution: 1.5,
        density:0.8
        }
        this.width=40;
        this.height=30;
        this.body = createSprite(x,y,40,30,options);
        this.image = loadImage("snow5.webp")
        World.add(world,this.body);
    }

    display(){
    var pos = this.body.position;
    push()
    translate(pos.x, pos.y)
    imageMode(CENTER);
    image(this.image , 50,50,100,100)
    pop()
    }
};