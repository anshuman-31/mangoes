class mango {
    constructor(){
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("pluckingmangoes/mano.png");
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        World.add(world, this.body);


    }




}