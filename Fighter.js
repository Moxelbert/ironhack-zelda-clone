class Fighter {
    constructor(health,x, y) {
        this.health = health
        this.x = x
        this.y = y
    }
    moveUp() {
        if(this.y>300){
        this.y-=300
    }
    }
    moveRight() {
        if(this.x<1160){
        this.x+=40
        }
    }
    moveLeft() {
        if (this.x>40){
        this.x-=40
        }
    }
    shoot() {
        ctx.fillRect(this.x, this.y, 50, 10)
        // strokeRect(x, y, width, height)
    }
}

