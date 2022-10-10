
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


const player = new Player();

//let y=100;
//const heightOfBox=100;
//let bottomOfBox = y+100;
function animate(){
    window.requestAnimationFrame(animate);
    c.fillStyle='white';
    c.fillRect(0,0,canvas.width,canvas.height);
    ////c.clearRect(0,0,400,400);
    console.log('animate');
    //
    
    player.draw();
    player.update();
    
}
animate();//calling the above function

