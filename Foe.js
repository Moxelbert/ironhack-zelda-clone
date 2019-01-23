class Foe {
    constructor(health,x, y) {
        this.health = health
        this.x = x
        this.y = y
    }
    moveUp() {
    var counter = 30;
    if (skeletonArcher1.y>=650){
    var callbackFunction = function () {
    skeletonArcher1.y -= counter
    timeoutId = setTimeout(callbackFunction, 20);
    if (skeletonArcher1.y === 350) {
    clearTimeout(timeoutId);
    }
    }
    var timeoutId = setTimeout(callbackFunction, 10)
    var callbackFunction2 = function () {
        skeletonArcher1.y += counter
    timeoutId = setTimeout(callbackFunction2, 20);
    if (skeletonArcher1.y === 650) {
    clearTimeout(timeoutId);
}
}
    var timeoutId = setTimeout(callbackFunction2, 410)
        }
}
    
moveRight() {
       if(this.x<1160){
        this.x += 10
        }
    }
    moveLeft() {
        if (this.x>40){
        this.x -= 10
        }
    }
    shoot() {
            arrowSkeleton.x = fighter.x    
            arrowSkeleton.y = fighter.y   
            ctx.fillStyle = 'brown'
            ctx.beginPath();
            ctx.lineWidth = 10;
            ctx.moveTo(this.x-40, this.y+50);
            ctx.lineTo(0, this.y+50);
            ctx.closePath()
            ctx.stroke()
            ctx.fill()    
    }
}

    