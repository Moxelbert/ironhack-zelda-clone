class Fighter {
    constructor(health,x, y) {
        this.health = health
        this.x = x
        this.y = y
    }
    moveUp() {
    var counter = 30;
    if (fighter.y>=650){
    var callbackFunction = function () {
    fighter.y -= counter
    timeoutId = setTimeout(callbackFunction, 20);
    if (fighter.y === 350) {
    clearTimeout(timeoutId);
    }
    }
    var timeoutId = setTimeout(callbackFunction, 10)
    var callbackFunction2 = function () {
    fighter.y += counter
    timeoutId = setTimeout(callbackFunction2, 20);
    if (fighter.y === 650) {
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
        if (powerLaser) {        
        arrowHero.x = fighter.x    
        arrowHero.y = fighter.y   
        ctx.strokeStyle = 'red'
        ctx.beginPath();
        ctx.lineWidth = 10;
        ctx.moveTo(this.x+50, this.y+50);
        ctx.lineTo(1200, this.y+50);
        ctx.closePath()
        ctx.stroke()
        ctx.fill()    
        } else {
            arrowHero.x = fighter.x    
            arrowHero.y = fighter.y   
            ctx.strokeStyle = 'blue'
            ctx.beginPath();
            ctx.lineWidth = 10;
            ctx.moveTo(this.x+50, this.y+50);
            ctx.lineTo(1200, this.y+50);
            ctx.closePath()
            ctx.stroke()
            ctx.fill() 
        }
    }
}
