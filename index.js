
/*so we get our canvas element here in the js world,
    we are specifing getContext method on top of it which
     specifies that we  want our context to be in the 2d world
   *
   c.fillRect(x,y,width,height)
   *
   canvas height and width are set to a 16:9 ratio
*/
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width=1024;//(64*16);
canvas.height=576;//(64*9);



const backgroundLevel1= new Sprite({
    position:{
        x:0,
        y:0,//we want the image to start from the top left
    },
    imageSrc:'img/backgroundLevel1.png',
}
)

const player = new Player();

const keys = {
    w:{
        pressed:false,
    },
    a:{
        pressed:false, 
    },
    s:{
        pressed:false,
    },
    d:{
        pressed:false,
    }
}

//const collisionBlocks = []

const parsedCollisions = collisionsLevel1.parse2D()
//console.log(parsedCollisions)
const collisionBlocks=parsedCollisions.createObjectsFrom2D();
//let y=100;
//const heightOfBox=100;
//let bottomOfBox = y+100;
function animate(){
    window.requestAnimationFrame(animate);
    
    //c.fillStyle='white';
    //c.fillRect(0,0,canvas.width,canvas.height);
    //////c.clearRect(0,0,400,400);
    backgroundLevel1.draw();
    collisionBlocks.forEach(collisionBlocks=>{
        collisionBlocks.draw();
    })
    console.log('animate');
    //
    player.velocity.x=0;
    
    //if(keys.w.pressed){player.velocity.y=-5;}
    //console.log('i pressed w')
    
    if(keys.d.pressed){player.velocity.x=5;}
    else if (keys.a.pressed){
        player.velocity.x=-5;
    }
    
    player.draw();
    player.update();
    
}
animate();//calling the above function

