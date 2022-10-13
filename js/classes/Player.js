class Player extends Sprite{//creating class for increased readablity of code
    constructor({collisionBlocks=[], imageSrc, frameRate, animations, loop}){
        super({imageSrc, frameRate, animations, loop} ); 
        //super({imageSrc})//passing imageSrc to Sprite Class
        this.position = {//this.position is equal to an object with the followign properties
            x:200,
            y:200,
        },
        //this.width=25,
        //this.height=25,
        this.sides ={
            bottom:this.position.y+this.height,

        },
        this.velocity={
            x:0,
            y:0,
        },
        this.gravity=1,
        this.collisionBlocks=collisionBlocks;
        this.frameRate=frameRate
    }
    //draw(){//how should a player look like
    //   c.fillStyle = 'rgba(0,0,255,0.5)';
    //   c.fillRect(this.imagethis.position.x,this.position.y,this.width,this.height)
////
    //}
    update(){
        //y++;//increasing y by 1 each frame, so that box looks like it's moving
        //sides = y+100;
        this.position.x+= this.velocity.x;
        //checking for horizontal collisions
        this.updateHitbox();
        this.checkForHorizontalCollisions();
        this.addGravity();
        //making hitbox
        

        //c.fillRect(this.hitbox.position.x,this.hitbox.position.y, this.hitbox.width,this.hitbox.height)
        //checking for vertical collisions
        this.updateHitbox();
        this.checkForVerticalCollisions();

        
    }
    handleInput(keys){
    if(this.preventInput) return
        this.velocity.x=0;
        
        //if(keys.w.pressed){player.velocity.y=-5;}
        //console.log('i pressed w')
        
        if(keys.d.pressed){
            this.switchSprite('runRight')
            this.velocity.x=5;
            this.lastDirection='right'
        }
        else if (keys.a.pressed){
            this.switchSprite('runLeft')
            this.velocity.x=-5;
            this.lastDirection='left' 
        }
        else{
            if(this.lastDirection==='left'){
                this.switchSprite('idleLeft')
            }
            else this.switchSprite('idleRight')

    }
    
    }
    switchSprite(name){
        if(this.image === this.animations[name].image )return 
        this.currentFrame=0;
        this.image=this.animations[name].image;
        this.frameRate= this.animations[name].frameRate;
        this.frameBuffer= this.animations[name].frameBuffer;
        this.loop= this.animations[name].loop;
        this.currentAnimation=this.animations[name].currentAnimation;

    }

    checkForHorizontalCollisions(){
        for (let i =0; i <this.collisionBlocks.length; i++){
            const collisionBlock = this.collisionBlocks[i];
            //determining if a collision exists
            if(this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.width  &&
                this.hitbox.position.x + this.hitbox.width >= collisionBlock.position.x &&
                this.hitbox.position.y +this.hitbox.height >= collisionBlock.position.y &&
                this.hitbox.position.y <=collisionBlock.position.y+collisionBlock.height){

                    //collision on the x axis going to left
                    if(this.velocity.x<0){
                        const offset =this.hitbox.position.x-this.position.x; 
                        this.position.x =collisionBlock.position.x+collisionBlock.width-offset + 0.01;break;
                    }
                    if(this.velocity.x>0){
                        const offset =this.hitbox.position.x-this.position.x+this.hitbox.width;
                        this.position.x =collisionBlock.position.x-offset - 0.01;break;
                    }   
                }
        }
    }
    updateHitbox(){
        this.hitbox={
            position:{
                x:this.position.x+58,
                y:this.position.y+34
            },
            width:50,height:53

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
            if(this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.width  &&
                this.hitbox.position.x + this.hitbox.width >= collisionBlock.position.x &&
                this.hitbox.position.y +this.hitbox.height >= collisionBlock.position.y &&
                this.hitbox.position.y <=collisionBlock.position.y+collisionBlock.height){

                    //collision on the x axis going to left
                    if(this.velocity.y<0){
                        this.velocity.y=0;
                        const offset =this.hitbox.position.y-this.position.y; 
                        this.position.y =collisionBlock.position.y+collisionBlock.height-offset  + 0.01;break;
                    }
                    if(this.velocity.y>0){
                        this.velocity.y=0;
                        const offset =this.hitbox.position.y-this.position.y+this.hitbox.height;
                        this.position.y =collisionBlock.position.y-offset - 0.01;break;
                    }
                }

        }
    }
}

