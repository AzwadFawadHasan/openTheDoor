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

Array.prototype.createObjectsFrom2D = function(){
    const objects = []
    this.forEach((row,y) => {
        //console.log(row)
        row.forEach((symbol,x) => {
            if(symbol===292){
                //piush a new collision into the collision blacks araray
                objects.push(new CollisionBlock(
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
    return objects
}

