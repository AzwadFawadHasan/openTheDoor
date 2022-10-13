const collisionsLevel1=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 0,
    0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0,
    0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0,
    0, 292, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0,
    0, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    //parsing  our  data into a 2d array
//arry prototype contains all methods that we cdan call upon an arry object
//prototype allows you to add new properties and methods to arrays.

//prototype is a property available with all JavaScript objects.

Array.prototype.parse2D = function() {
    const rows = []
    for(let i =0; i<this.length; i+=16){
        //each row in above array has 16 cells
        rows.push(this.slice(i, i+16))

    }
    return rows;
}


class CollisionBlack{
    constructor({position}){
        this.position = position
        this.width = 64
        this.height = 64//each block in the tiles is of 64 px

    }
    draw(){
        c.fillStyle='rgba(255,0,0,0.5)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}
const collisionBlocks = []

const parsedCollisions = collisionsLevel1.parse2D()
//console.log(parsedCollisions)
parsedCollisions.forEach((row,y) => {
    //console.log(row)
    row.forEach((symbol,x) => {
        if(symbol===292){
            //piush a new collision into the collision blacks araray
            collisionBlocks.push(new CollisionBlack(
                {
                    position:{
                        x:x*64,//x index multiplies by 64
                        y:y*64,
                    }
                }
            ))
        }


    })
})