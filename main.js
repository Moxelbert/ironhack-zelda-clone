// select the canvas document and create ctx (the entrypoint to draw shapes)

var canvas = document.querySelector("canvas")
var ctx = canvas.getContext("2d")

// save the width and height of the canvas
var width = canvas.width
var height = canvas.height

    var grass = new Image();
    grass.src = 'grass.png';
    var sand = new Image();
    sand.src = 'sand.jpg';
    var fountain = new Image();
    fountain.src = 'WaterFountain.png';
    var fence = new Image();
    fence.src = 'fence.png';
    var house = new Image();
    house.src = 'house1.png';
    var house2 = new Image();
    house2.src = 'house2.png';
    var house3 = new Image();
    house3.src = 'house3.png';
    var wood2 = new Image();
    wood2.src = 'wood2.png';
    var wood3 = new Image();
    wood3.src = 'wood3.png';
    var castle = new Image();
    castle.src = 'castle.png';
    var cow = new Image();
    cow.src = 'cow.png';
    var cow2 = new Image();
    cow2.src = 'cow2.png';
    var bridge = new Image();
    bridge.src = 'bridge.png';
    var rock = new Image();
    rock.src = 'rock.png';
    var chest = new Image();
    chest.src = 'chest.png';
    var skull = new Image();
    skull.src = 'skull.png';
    var teleport = new Image();
    teleport.src = 'teleport.png';
    var torch = new Image();
    torch.src = 'torch.png';
    var oldTree = new Image();
    oldTree.src = 'oldTree.png';
    var rottenTree = new Image();
    rottenTree.src = 'rottenTree.png';
    var lumber = new Image();
    lumber.src = 'lumber.png';
    var grave1 = new Image();
    grave1.src = 'grave1.png';
    var grave2 = new Image();
    grave2.src = 'grave2.png';
    var grave3 = new Image();
    grave3.src = 'grave3.png';
    var tower = new Image();
    tower.src = 'tower.png';
    var tanne = new Image();
    tanne.src = 'tanne.png';
    var tree = new Image();
    tree.src = 'Tree.png';
    var bush = new Image();
    bush.src = 'bush.png';
    var cherry = new Image();
    cherry.src = 'cherryTree.png';
    var water = new Image();
    water.src = 'water.png';
   
function board() {
    ctx.drawImage(grass,0,0,1200,800)
    var pat = ctx.createPattern(sand, "repeat");
    ctx.fillStyle = pat;
    ctx.rect(350, 200, 750, 40);
    ctx.rect(950, 200, 50, 280);
    ctx.rect(350, 480, 650, 40);
    ctx.rect(350, 520, 50, 120)
    ctx.rect(300, 600, 50, 40)
    ctx.rect(100, 600, 150, 40)
    ctx.rect(100, 440, 50, 160)
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    // for (var i = 0; i <= 24; i++) {
    //     ctx.beginPath();
    //     ctx.moveTo(i * 50, 0);
    //     ctx.lineTo(i * 50, 800);
    //     ctx.stroke();
    // }
    // for (var i = 0; i <= 20; i++) {
    //     ctx.beginPath();
    //     ctx.moveTo(0, i * 40);
    //     ctx.lineTo(1200, i * 40);
    //     ctx.stroke();
    // }
    
    //water.onload = function () {
        var patWat = ctx.createPattern(water, "repeat");
        ctx.fillStyle = patWat;
        ctx.beginPath();
        ctx.lineWidth = 50;
        ctx.moveTo(125, 0);
        ctx.lineTo(125, 160);
        ctx.lineTo(200, 260);
        ctx.lineTo(275, 260);
        ctx.lineTo(275, 700);
        ctx.lineTo(225, 850);
        ctx.strokeStyle = patWat;
        ctx.stroke();
        //}
    ctx.beginPath();
    ctx.strokeStyle = 'w#3333cc';
    ctx.lineWidth = 1;
    ctx.moveTo(100, 0);
    ctx.lineTo(100, 120);
    ctx.stroke();

        ctx.drawImage(house, 1100, 400, 100, 100);
        ctx.drawImage(house2, 1000, 350, 100, 100);
        ctx.drawImage(house3, 950, 500, 100, 100); 
        ctx.drawImage(fountain, 1030, 450, 70, 70);
        ctx.drawImage(fountain, 1030, 450, 70, 70);
        ctx.drawImage(fence, 1070, 510, 90, 90);
        ctx.drawImage(cow, 1080, 510, 100, 100);
        ctx.drawImage(cow2, 1070, 500, 90, 60);
        ctx.drawImage(bridge, 230, 580, 80, 60);
        ctx.drawImage(bridge, 80, 60, 80, 60);
        ctx.drawImage(rock, 200, 160, 80, 60);
        ctx.drawImage(teleport, 80, 380, 80, 80);
        ctx.drawImage(torch, 75, 300, 100, 100);
        ctx.drawImage(chest, 310, 200, 30, 30);
        ctx.drawImage(chest, 110, 360, 30, 30);
        ctx.drawImage(chest, 1110, 200, 30, 30);
        ctx.drawImage(skull, 150, 400, 70, 70);
        ctx.drawImage(oldTree, 25, 400, 80, 80);
        ctx.drawImage(lumber, 20, 460, 50, 50);
        ctx.drawImage(wood3, 600, 440, 50, 50);
        ctx.drawImage(grave1, 1100, 150, 50, 50);
        ctx.drawImage(grave2, 1150, 180, 50, 50);
        ctx.drawImage(grave3, 1100, 220, 50, 50);
        ctx.drawImage(tower, 50, 580, 70, 180);
    }
function forrest() {
 
    //tanne.onload = function () {
        for (var i = 0; i <= 8; i++) {
            if (i % 2 === 0) {
                ctx.drawImage(tanne, 400 + (i * 50), 200, 60, 90);
            } else {
                ctx.drawImage(tree, 400 + (i * 50), 200, 60, 90);
            }
        }
        for (var i = 0; i <= 12; i++) {
            ctx.drawImage(tanne, 250 + (i * 50), 40, 60, 90);
        }
        for (var i = 0; i <= 12; i++) {
            ctx.drawImage(tanne, 250 + (i * 50), 80, 60, 90);
        }
        for (var i = 0; i <= 12; i++) {
            ctx.drawImage(tanne, 300 + (i * 50), 120, 60, 90);
        }
        for (var i = 0; i <= 10; i++) {
            ctx.drawImage(tree, 350 + (i * 50), 240, 60, 90);
        }
        for (var i = 0; i <= 8; i++) {
            ctx.drawImage(tree, 400 + (i * 50), 280, 60, 90);
        }
        for (var i = 0; i <= 6; i++) {
            ctx.drawImage(tree, 450 + (i * 50), 560, 60, 90);
        }
        for (var i = 0; i <= 8; i++) {
            if (i % 2 === 0) {
                ctx.drawImage(tree, 400 + (i * 50), 600, 60, 90);
            } else {
                ctx.drawImage(cherry, 400 + (i * 50), 600, 60, 90);
            }
        }
        for (var i = 0; i <= 8; i++) {
            if (i % 2 === 0) {
                ctx.drawImage(cherry, 400 + (i * 50), 640, 60, 90);
            } else {
                ctx.drawImage(bush, 400 + (i * 50), 640, 60, 90);
            }
        }
    }
function drawEverything() {
    board()
    forrest()
}

function clearCanvas() {
    ctx.clearRect(0, 0, 1200, 800);
}

class Hero {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    moveUp() {
        if(this.y>20){
        this.y-=20
    }
    }
    moveDown() {
        if(this.y<780){
        this.y+=20
        }
    }
    moveRight() {
        if(this.x<1170){
        this.x+=20
        }
    }
    moveLeft() {
        if (this.x>30){
        this.x-=20
        }
    }
}

class Monster {
    constructor(x,y){
        this.x = x
        this.y = y
    }
    }
var hero = new Image();
hero.src = 'Hero.png'
var player = new Hero(940, 400);
function drawHero() {
        ctx.drawImage(hero, player.x, player.y, 50, 50)
}

var skeleton = new Image();
skeleton.src = 'skeleton.png';
var sceleton1 = new Monster(1050, 180);
var orc = new Image();
orc.src = 'orc.png';
var orc1 = new Monster(350, 190);
var sorcerer = new Image();
sorcerer.src = 'Sorcerer.png';
var sorcerer1 = new Monster(100,420)

function drawMonsters() {
    ctx.drawImage(skeleton, 1050, 180, 50, 50)
    ctx.drawImage(orc, 350, 190, 50, 50)
    ctx.drawImage(sorcerer, 100, 420, 50, 50)
}

var iwanttofight = false

drawEverything()

function updateCanvas() {

    if(iwanttofight) {

        player.x = 0 
        player.y = 0 

        clearArena()
        drawBg()
        drawFighter()
        drawSkeletonArcher()
        calculateDamage()
        finish()
        arrowHeroClear()
        arrowSkeletonClear()
        // var intervalId = setInterval(function () {
        // skeletonFighting()
        // }, 500);    
        document.onkeydown = function (e) {
            e.preventDefault()
            switch (e.keyCode) {
                case 37: fighter.moveLeft(); break;
                case 38: fighter.moveUp(); break;
                case 39: fighter.moveRight(); break;
                case 32: fighter.shoot(); break;
            }
            drawFighter()
        }
    } else  {
        if (Math.abs(sceleton1.x - player.x) <= 10 && Math.abs(sceleton1.y - player.y) <= 10) {
            confirm('Skeleton: You wansum?')
            iwanttofight = true        
        }
        if (Math.abs(sorcerer1.x - player.x) <= 10 && Math.abs(sorcerer1.y - player.y) <= 10) {
            confirm('Evil Wizard: Fuck off')
        }
        if (Math.abs(orc1.x - player.x) <= 10 && Math.abs(orc1.y - player.y) <= 10) {
            confirm('Orc: fook fook 5$"')
        }
        clearCanvas()
        drawEverything()
        drawMonsters()
        drawHero()    
    }

    //window.requestAnimationFrame(updateCanvas)
}
//window.requestAnimationFrame(updateCanvas);

document.onkeydown = function (e) {
    e.preventDefault()
    switch (e.keyCode) {
        case 37: player.moveLeft(); break;
        case 38: player.moveUp(); break;
        case 39: player.moveRight(); break;
        case 40: player.moveDown(); break;
    }
    updateCanvas()
    //drawHero()
}
//clearCanvas()

var graveyard = new Image();
graveyard.src = 'background.jpg'
function drawBg() {
    ctx.drawImage(graveyard, 0, 0, 1200, 800)
}
var archer = new Image();
archer.src = 'Hero4.png'
var skeletonArcher = new Image();
skeletonArcher.src = 'skeletonArcher.png'
var fighter = new Fighter(100, 100, 650);
function drawFighter() {
    ctx.drawImage(archer, fighter.x, fighter.y, 150, 150)
}
var skeletonArcher1 = new Foe(100, 1000, 650);
function drawSkeletonArcher() {
    ctx.drawImage(skeletonArcher, skeletonArcher1.x, skeletonArcher1.y, 150, 150)
}

var arrowHero = new Arrow(0, 0);
function arrowHeroClear(){
    arrowHero.x = 0
    arrowHero.y = 0
}
var arrowSkeleton = new Arrow(0, 0);
function arrowSkeletonClear(){
    arrowSkeleton.x = 0
    arrowSkeleton.y = 0
}

function calculateDamage() {
    if (arrowHero.y === skeletonArcher1.y) {
        skeletonArcher1.health -= 10
    }
    if (arrowSkeleton.y === fighter.y) {
        fighter.health -= 10
    }
}

function skeletonFighting() {
    if (Math.floor(Math.random()*5) === 0) {
        skeletonArcher1.moveLeft();
    }
    else if (Math.floor(Math.random()*5) === 1) {
        skeletonArcher1.moveRight();
    }
    else if (Math.floor(Math.random()*5) === 2) {
        skeletonArcher1.moveUp();
    }
    else {skeletonArcher1.shoot();}
}

function finish(){
    if(skeletonArcher1.health <=0){
        confirm('You won!')
    }
    if(fighter.health <=0) {
        confirm('You lose(r)!')
        iwanttofight = false
        window.clearInterval(fightingIntervalId)
        fightingIntervalId = undefined
    }
}

function clearArena() {
        ctx.clearRect(0, 0, 1200, 800);
}


// document.onkeydown = function (e) {
//     e.preventDefault()
//     switch (e.keyCode) {
//         case 37: fighter.moveLeft(); break;
//         case 38: fighter.moveUp(); break;
//         case 39: fighter.moveRight(); break;
//         case 32: fighter.shoot(); break;
//     }
//     drawFighter()
// }
