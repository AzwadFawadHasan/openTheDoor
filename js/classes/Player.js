class Player{//creating class for increased readablity of code
    constructor(){
        this.position = {//this.position is equal to an object with the followign properties
            x:100,
            y:100,
        }
        this.width=100;
        this.height=100;
        this.sides ={
            bottom:this.position.y+this.height,

        }

    }
    draw(){//how should a player look like
        c.fillStyle = 'red';
        c.fillRect(this.position.x,this.position.y,this.width,this.height)

    }
    update(){
        //y++;//increasing y by 1 each frame, so that box looks like it's moving
        //sides = y+100;
        if(this.sides.bottom<canvas.height){
            this.position.y++;
            this.sides.bottom=this.position.y+ this.height;
         }
    }
}
