class Player{//creating class for increased readablity of code
    constructor({collisionBlocks=[]}){
        this.position = {//this.position is equal to an object with the followign properties
            x:200,
            y:200,
        },
        this.width=25,
        this.height=25,
        this.sides ={
            bottom:this.position.y+this.height,

        },
        this.velocity={
            x:0,
            y:0,
        },
        this.gravity=1,
        this.collisionBlocks=collisionBlocks;
    }
    draw(){//how should a player look like
        c.fillStyle = 'red';
        c.fillRect(this.position.x,this.position.y,this.width,this.height)

    }
    update(){
        //y++;//increasing y by 1 each frame, so that box looks like it's moving
        //sides = y+100;
        this.position.x+= this.velocity.x;
        //checking for horizontal collisions
        this.checkForHorizontalCollisions();
        this.addGravity();
        //checking for vertical collisions
        this.checkForVerticalCollisions();

        
    }
    checkForHorizontalCollisions(){
        for (let i =0; i <this.collisionBlocks.length; i++){
            const collisionBlock = this.collisionBlocks[i];
            //determining if a collision exists
            if(this.position.x <= collisionBlock.position.x + collisionBlock.width  &&
                this.position.x + this.width >= collisionBlock.position.x &&
                this.position.y +this.height >= collisionBlock.position.y &&
                this.position.y <=collisionBlock.position.y+collisionBlock.height){

                    //collision on the x axis going to left
                    if(this.velocity.x<0){
                        this.position.x =collisionBlock.position.x+collisionBlock.width + 0.01;break;
                    }
                    if(this.velocity.x>0){
                        this.position.x =collisionBlock.position.x-this.width - 0.01;break;
                    }
                }
        }
    }

    addGravity() {
         //adding graviuty
         this.velocity.y+= this.gravity;
         this.position.y+=this.velocity.y;//ading gravity 

    }
    checkForVerticalCollisions(){
        for (let i =0; i <this.collisionBlocks.length; i++){
            const collisionBlock = this.collisionBlocks[i];
            //detemining if a collision exists
            if(this.position.x <= collisionBlock.position.x + collisionBlock.width  &&
                this.position.x + this.width >= collisionBlock.position.x &&
                this.position.y +this.height >= collisionBlock.position.y &&
                this.position.y <=collisionBlock.position.y+collisionBlock.height){

                    //collision on the x axis going to left
                    if(this.velocity.y<0){
                        this.velocity.y=0;
                        this.position.y =collisionBlock.position.y+collisionBlock.height  + 0.01;break;
                    }
                    if(this.velocity.y>0){
                        this.velocity.y=0;
                        this.position.y =collisionBlock.position.y-this.height - 0.01;break;
                    }
                }

        }
    }
}

