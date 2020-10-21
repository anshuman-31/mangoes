class stone{
    constructor(){
        var options={
            isStatic=true,
            restitution:0,
            friction:1,
        }
        function keyPressed(){
            if(keyCode === 32){
                Matter.Body.setPosition(stoneObj.body, {x:235,y:420})
                launcherObject.attach(stoneObj.body);
            }

        }




    }



}