
/*so we get our canvas element here in the js world,
    we are specifing getContext method on top of it which
     specifies that we  want our context to be in the 2d world
   *
   c.fillRect(x,y,width,height)
   *
   canvas height and width are set to a 16:9 ratio
*/
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d');
canvas.width=64*16;
canvas.height=64*9;
c.fillStyle=('white');
c.fillRect(0,0,200,200);

