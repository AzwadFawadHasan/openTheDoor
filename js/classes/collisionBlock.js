class CollisionBlock{
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