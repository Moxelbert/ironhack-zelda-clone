// select the canvas document and create ctx (the entrypoint to draw shapes)
var canvas = document.querySelector("canvas")
var ctx = canvas.getContext("2d")

// save the width and height of the canvas
var width = canvas.width
var height = canvas.height

var iwanttofight = false
var powerLaser = false
var energyShard = true
var goblinHammer = false


var grass = new Image();
grass.src = 'images/grass.png';
var sand = new Image();
sand.src = 'images/sand.jpg';
var fountain = new Image();
fountain.src = 'images/waterFountain.png';
var fence = new Image();
fence.src = 'images/fence.png';
var house = new Image();
house.src = 'images/house1.png';
var house2 = new Image();
house2.src = 'images/house2.png';
var house3 = new Image();
house3.src = 'images/house3.png';
var wood2 = new Image();
wood2.src = 'images/wood2.png';
var castle = new Image();
castle.src = 'images/castle.png';
var cow = new Image();
cow.src = 'images/cow.png';
var cow2 = new Image();
cow2.src = 'images/cow2.png';
var bridge = new Image();
bridge.src = 'images/bridge.png';
var rock = new Image();
rock.src = 'images/rock.png';
var skull = new Image();
skull.src = 'images/skull.png';
var ballermann = new Image();
ballermann.src = 'images/ballermann2.jpg'
var torch = new Image();
torch.src = 'images/torch.png';
var oldTree = new Image();
oldTree.src = 'images/oldTree.png';
var rottenTree = new Image();
rottenTree.src = 'images/rottenTree.png';
var lumber = new Image();
lumber.src = 'images/lumber.png';
var grave1 = new Image();
grave1.src = 'images/grave1.png';
var grave2 = new Image();
grave2.src = 'images/grave2.png';
var grave3 = new Image();
grave3.src = 'images/grave3.png';
var tower = new Image();
tower.src = 'images/tower.png';
var tanne = new Image();
tanne.src = 'images/tanne.png';
var tree = new Image();
tree.src = 'images/tree.png';
var bush = new Image();
bush.src = 'images/bush.png';
var cherry = new Image();
cherry.src = 'images/cherryTree.png';
var water = new Image();
water.src = 'images/water.png';
var anvil = new Image();
anvil.src = 'images/anvil.png';

function board() {
    ctx.drawImage(grass, 0, 0, 1200, 800)
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
    // ctx.drawImage(teleport, 80, 380, 80, 80);
    ctx.drawImage(torch, 75, 300, 100, 100);
    // ctx.drawImage(chest, 310, 200, 30, 30);
    // ctx.drawImage(chest, 110, 360, 30, 30);
    // ctx.drawImage(chest, 1110, 200, 30, 30);
    ctx.drawImage(skull, 150, 400, 70, 70);
    ctx.drawImage(oldTree, 25, 400, 80, 80);
    ctx.drawImage(lumber, 20, 460, 50, 50);
    ctx.drawImage(grave1, 1100, 150, 50, 50);
    ctx.drawImage(grave2, 1150, 180, 50, 50);
    ctx.drawImage(grave3, 1100, 220, 50, 50);
    ctx.drawImage(tower, 50, 580, 70, 180);
    ctx.drawImage(anvil, 300, 190, 50,50)
}
var mogwai = new Audio('07 Stanley Kubrick.m4a')
function playSound1() {
    mogwai.play()
}
var drews = new Audio("12 Ich bin der König von Mallorca (V.m4a")
drews.currentTime = 24
function playSound() {
    drews.play()
} 
var harmonica = new Audio("harmonica.m4a")
harmonica.currentTime = 58
function playSound2() {
    harmonica.play()
}

function forrest() {

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

function intro() {
    clearInterval(intervalId)
    clearInterval(intervalId1)
    clearInterval(intervalId2)
    clearCanvas()
    ctx.fillStyle = '#006600'
    ctx.font = '80px serif';
    ctx.rect(0, 0, 1200, 800) 
    ctx.strokeRect(0, 0, 1200, 800) 
    ctx.fillText("Our hero enters the portal.", 300, 200, 600)
    ctx.fillText('The borders of time and space begin to dissolve.', 300, 260, 600)
    ctx.fillText('After some time a strange music starts to play.', 300, 320, 600)
    ctx.fillText('When our hero opens the eyes, he finds himself in a foreign and beautiful country.', 250, 380, 800)
    ctx.fillText('For sure, the portal brought him to the wrong royal palace...', 300, 480, 800)
    timeoutId2 = setTimeout (function(){
        playSound()
        },8000);
    timeoutId = setTimeout (function(){
    ctx.drawImage(ballermann, 200, 150, 1200,800)
    },15000);
}

class Monster {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

class Items {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

var skeleton = new Image();
skeleton.src = 'images/skeleton.png';
var sceleton1 = new Monster(1050, 180);
var orc = new Image();
orc.src = 'images/orc.png';
var orc1 = new Monster(350, 190);
var sorcerer = new Image();
sorcerer.src = 'images/sorcerer.png';
var sorcerer1 = new Monster(100, 420)
var wood3 = new Image();
wood3.src = 'images/wood3.png';
var wood = new Monster(600, 440)
var grandmother = new Image();
grandmother.src = 'images/oma.png';
var grandmother1 = new Monster(900, 410);
var chest = new Image();
chest.src = 'images/chest.png';
var chest1 = new Monster(600, 720);
var fairy = new Image();
fairy.src = 'images/fairy2.png';
var fairy1 = new Monster(550, 720);
var teleport = new Image();
teleport.src = 'images/teleport.png';
var teleport1 = new Monster(80,380)

function drawMonsters() {
    ctx.drawImage(grandmother, 900, 410, 50, 50)
    ctx.drawImage(skeleton, 1050, 180, 50, 50)
    ctx.drawImage(orc, 350, 190, 50, 50)
    ctx.drawImage(wood3, 600, 410, 50, 50)
    ctx.drawImage(chest, 600, 720, 30, 30)
    ctx.drawImage(fairy, 550, 720, 50, 50)
    ctx.drawImage(teleport, 80, 380, 80, 80);
    ctx.drawImage(sorcerer, 100, 420, 50, 50)
}

function drawEverything() {
    board()
    forrest()
}

function switchMode() {
    if (iwanttofight === false) {
         intervalId = setInterval(function () {
            clearCanvas()
            drawEverything()
            drawHero()
            drawMonsters()
        }, 1000 / 60)
        document.onkeydown = function (e) {
            e.preventDefault()
            switch (e.keyCode) {
                case 37: player.moveLeft(); break;
                case 38: player.moveUp(); break;
                case 39: player.moveRight(); break;
                case 40: player.moveDown(); break;
                case 69: player.askMonster(); break;
            }
        }
    }
}

function startFight() {
   intervalId1 = setInterval(function () {
        clearArena()
        drawBg()
        drawFighter()
        drawSkeletonArcher()
        calculateDamage()
        finish()
        arrowHeroClear()
        arrowSkeletonClear()
    }, 1000 / 60)
    intervalId2 = setInterval(function () {
        skeletonFighting()
    }, 500)
    document.onkeydown = function (r) {
        r.preventDefault()
        switch (r.keyCode) {
            case 37: fighter.moveLeft(); break;
            case 38: fighter.moveUp(); break;
            case 39: fighter.moveRight(); break;
            case 32: fighter.shoot(); break;
        }
        drawFighter()
    }
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
        if (this.y > 20) {
            this.y -= 20
        }
    }
    moveDown() {
        if (this.y < 780) {
            this.y += 20
        }
    }
    moveRight() {
        if (this.x < 1170) {
            this.x += 20
        }
    }
    moveLeft() {
        if (this.x > 30) {
            this.x -= 20
        }
    }
    askMonster() {
        interaction()
    }
}

var hero = new Image();
hero.src = 'images/hero.png'
var player = new Hero(940, 400);
function drawHero() {
    ctx.drawImage(hero, player.x, player.y, 50, 50)
}


function clearArena() {
    ctx.clearRect(0, 0, 1200, 800);
}

var graveyard = new Image();
graveyard.src = 'images/background.jpg'
function drawBg() {
    ctx.drawImage(graveyard, 0, 0, 1200, 800)
}
var archer = new Image();
archer.src = 'images/solo.png'
var skeletonArcher = new Image();
skeletonArcher.src = 'images/skeletonArcher.png'
var fighter = new Fighter(100, 100, 650);
function drawFighter() {
    ctx.drawImage(archer, fighter.x, fighter.y, 200, 200)
}
var skeletonArcher1 = new Foe(100, 1000, 650);
function drawSkeletonArcher() {
    ctx.drawImage(skeletonArcher, skeletonArcher1.x, skeletonArcher1.y, 150, 150)
}
var arrowHero = new Arrow(0, 0);
function arrowHeroClear() {
    arrowHero.x = 0
    arrowHero.y = 0
}
var arrowSkeleton = new Arrow(0, 0);
function arrowSkeletonClear() {
    arrowSkeleton.x = 0
    arrowSkeleton.y = 0
}
function finish() {
    if (skeletonArcher1.health <= 0) {
        confirm('The necromancer is defeated. After searching his body, you find the energy shard')
        console.log('You won!')
        iwanttofight = false
        clearInterval(intervalId1)
        clearInterval(intervalId2)
        harmonica.pause()
        switchMode()
        energyShard === true
        skeletonArcher1.health = 100
        fighter.health = 100
        drawEverything()
        drawHero()
        drawMonsters()
    }
    if (fighter.health <= 0) {
        confirm('You lose(r)!')
        console.log('You lose!')
        iwanttofight = false
        clearInterval(intervalId1)
        clearInterval(intervalId2)
        harmonica.pause()
        switchMode()
        skeletonArcher1.health = 100
        fighter.health = 100
        drawEverything()
        drawHero()
        drawMonsters()
    }
}

function calculateDamage() {
    if (arrowHero.y === skeletonArcher1.y && powerLaser === true) {
        skeletonArcher1.health -= 20
    }
    else if (arrowHero.y === skeletonArcher1.y && powerLaser === false) {
        skeletonArcher1.health -= 1
    }
    else if (arrowSkeleton.y === fighter.y) {
        fighter.health -= 10
    }
    // else if (arrowSkeleton.y === fighter.y) {
    //     fighter.health -= 30
    // }
}
function skeletonFighting() {
    if (Math.floor(Math.random() * 5) === 0) {
        skeletonArcher1.moveLeft();
    }
    else if (Math.floor(Math.random() * 5) === 1) {
        skeletonArcher1.moveRight();
    }
    else if (Math.floor(Math.random() * 5) === 2) {
        skeletonArcher1.moveUp();
    }
    else { skeletonArcher1.shoot(); }
}
function interaction() {
    if (Math.abs(sceleton1.x - player.x) <= 10 && Math.abs(sceleton1.y - player.y) <= 10) {
        //mogwai.pause()
        // harmonica.play()
        confirm('Our hero enters the Necromancer\'\ s crypt. An unnatural cold creeps into his bones. The mighty lord of undead rises from his throne...')
        iwanttofight = true
        clearInterval(intervalId)
        startFight()
    }
    else if (Math.abs(sorcerer1.x - player.x) <= 10 && Math.abs(sorcerer1.y - player.y) <= 10) {
        confirm('Gatekeeper: the Dark Portal has lost its power, for the Necromancer has stolen its energy shard. The hero who returns the shard will be generously rewarded by the king, but be aware of the Necromancer\'s dark power. Only the strongest fighters can face him in battle. You can find him on the graveyard in the east')
    }
    else if (Math.abs(orc1.x - player.x) <= 10 && Math.abs(orc1.y - player.y) <= 10 && goblinHammer === false) {
        confirm('Goblin blacksmith: "I offer the finest laser cannons in the whole realm, but the nasty fairies have stolen my hammer. Can you return it to me? As a reward, I will provide you with better firepower"')
    } 
    else if (Math.abs(orc1.x - player.x) <= 10 && Math.abs(orc1.y - player.y) <= 10 && goblinHammer) {
        confirm('You found the hammer! Here, have this XXL superlaser cannon')
        powerLaser = true
        harmonica.play()
    }
    else if (Math.abs(wood.x - player.x) <= 10 && Math.abs(wood.y - player.y) <= 10) {
    confirm('West: The Dark Portal\nEast: Mönchengladbach\nSouth: Fairy Ranch\nNorth: Stadtpark')
}
    else if (Math.abs(grandmother1.x - player.x) <= 10 && Math.abs(grandmother1.y - player.y) <= 10) {
    confirm('Orcs have been spotted in the northern forrests! We need to inform the king about it as soon as possible. Travel west to the Dark Portal, it will bring you the royal castle')
    // timeoutId3 = setTimeout (function(){
    //     playSound1()
    //     },8000);
} 
    else if (Math.abs(chest1.x - player.x) <= 10 && Math.abs(chest1.y - player.y) <= 10) {
    confirm('You found the hammer')
    goblinHammer = true
}
    else if (Math.abs(teleport1.x - player.x) <= 10 && Math.abs(teleport1.y - player.y) <= 10 && energyShard===true) {
    harmonica.pause()
    confirm('Do you want to to use the Dark Portal?')
    intro()
}
}

if (iwanttofight === false) {
    var intervalId = setInterval(function () {
        clearCanvas()
        drawEverything()
        drawHero()
        drawMonsters()
    }, 1000 / 60)
    document.onkeydown = function (e) {
        e.preventDefault()
        switch (e.keyCode) {
            case 37: player.moveLeft(); break;
            case 38: player.moveUp(); break;
            case 39: player.moveRight(); break;
            case 40: player.moveDown(); break;
            case 69: player.askMonster(); break;
        }
    }
}


// } else {
//     intervalId1 = setInterval(function () {
//             clearArena()
//             drawBg()
//             drawFighter()
//             drawSkeletonArcher()
//             calculateDamage()
//             finish()
//             arrowHeroClear()
//             arrowSkeletonClear()
//             skeletonFighting()
//         }, 1000 / 60)
    // intervalId2 = setInterval(function () {
    // skeletonFighting()
    // }, 5000)
// document.onkeydown = function (r) {
//     r.preventDefault()
//     switch (r.keyCode) {
//         case 37: fighter.moveLeft(); break;
//         case 38: fighter.moveUp(); break;
//         case 39: fighter.moveRight(); break;
//         case 32: fighter.shoot(); break;
//     }
//     drawFighter()
// }   


