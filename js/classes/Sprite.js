class Sprite{
    constructor({position, imageSrc, frameRate =1, animations,frameBuffer=2, loop=true, autoplay=true}){//passing an object called position
        this.position=position;
        this.image= new Image()
        this.image.src = imageSrc
        this.image.onload = () =>{
            this.loaded=true
            this.width = this.image.width/this.frameRate
            this.height = this.image.height//11
        }
        this.loaded = false
        this.frameRate= frameRate
        this.currentFrame=0;
        this.elapsedFrames = 0;
        this.frameBuffer=frameBuffer;
        this.animations=animations;
        this.loop=loop;
        this.autoplay=autoplay;
        this.currentAnimation
        if(this.animations){
            // if there are multiple animations
            //we want to run a for loop for all the elements/keys in the animation object
            for (let key in this.animations){
                const image = new Image()
                image.src = this.animations[key].imageSrc
                //within each animation object, we will now assign the actual image that we are creating equal to a property called image
                this.animations[key].image= image   
            }
        }
    }
    draw(){
        if(!this.loaded)return
        const cropbox = {
            position:{
                x:this.width*this.currentFrame,y:0
            },
            width: this.width,
            height: this.height
             
        }
        
        c.drawImage(this.image,cropbox.position.x, cropbox.position.y,cropbox.width, cropbox.height, this.position.x, this.position.y,this.width, this.height)
        this.updateFrames();
        
    }
    play(){
        this.autoplay=true;
    }
    updateFrames(){
        if(!this.autoplay)return
        this.elapsedFrames+=27;
        if(this.elapsedFrames%this.frameBuffer===0){
            if(this.currentFrame< this.frameRate-1){
                this.currentFrame++;
            }
            else if(this.loop){
                this.currentFrame=0
            }
            
        }
        //checking for whether there is any next sprite sheet present to load a new world after door is enteres
        if(this.currentAnimation?.onComplete){
            if(this.currentFrame === this.frameRate -1 && !this.currentAnimation.isActive){
                this.currentAnimation.onComplete();currentAnimation.isActive=true;
            }
            

        }
    }
}