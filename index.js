
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
    //frameRate:11
}
)
//const collisionBlocks = []
const doors=[//doors array stores all the doors in the game
    new Sprite({
        position: {
            x:767,y:270
        },
        imageSrc: 'img/doorOpen.png',
        frameRate:5, 
        frameBuffer:5,
        loop:false,
        autoplay:false,
    })
    
]

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

//

const parsedCollisions = collisionsLevel1.parse2D()
//console.log(parsedCollisions)
const collisionBlocks=parsedCollisions.createObjectsFrom2D();

const player = new Player({
    collisionBlocks:collisionBlocks,
    imageSrc: 'img/king/idle.png',
    frameRate:11,
    animations:{
        idleRight:{
            frameRate:11,
            frameBuffer:12,
            loop:true,
            imageSrc: 'img/king/idle.png',
            
        },
        idleLeft:{
            frameRate:11,
            frameBuffer:12,
            loop:true,
            imageSrc: 'img/king/idleLeft.png',
        },
        runRight:{
            frameRate:8,
            frameBuffer:12,
            loop:true,
            imageSrc: 'img/king/runRight.png',
        },
        runLeft:{
            frameRate:8,
            frameBuffer:12,
            loop:true,
            imageSrc: 'img/king/runLeft.png',
        },
        enterDoor:{
            frameRate:8,
            frameBuffer:4,
            loop:false,
            imageSrc: 'img/king/enterDoor.png',
            onComplete:()=>{
                console.log('completed animations')// here onComplete is equal to a ufnction    
            }

        }
    },
    
});

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

    doors.forEach(door=>{
        door.draw();
    })
    //console.log('animate');
    //
    player.handleInput(keys);
    
    player.draw();
    player.update();
    
}
animate();//calling the above function

