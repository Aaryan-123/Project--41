const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var maxDrops = 100;

var lighteningAnimationVariable = 10;
var lighteningAnimation1;
var lighteningAnimation2;
var lighteningAnimation3;
var lighteningAnimation4;
var lighteningAnimations;

var drops = [];

function preload(){
    lighteningAnimation1 = loadImage("thunderbolt/1.png");
    lighteningAnimation2 = loadImage("thunderbolt/2.png");
    lighteningAnimation3 = loadImage("thunderbolt/3.png");
    lighteningAnimation4 = loadImage("thunderbolt/4.png");
}

function setup(){
    createCanvas(400,800);
    engine = Engine.create();
    world = engine.world;
  
    umbrella = new Umbrella(300,700);

    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new Drop(random(0,400), random(0,400)));
        }

    }

}

function draw() {
    Engine.update(engine);

    background(0);
    umbrella.display();

    for(var i = 0; i < maxDrops; i++) {
        drops.push(new Drop(random(0,400), random(0,400)));
    }

    switch(lighteningAnimationVariable) {
        case 1:
            lighteningAnimations.addImage(lighteningAnimation1);
            break;
        case 2:
            lighteningAnimations.addImage(lighteningAnimation2);
            break;
        case 3:
            lighteningAnimations.addImage(lighteningAnimation3);
            break;
        case 4:
            lighteningAnimations.addImage(lighteningAnimation4);
            break;
    }
    umbrella.display();

    for(var i = 0; i < maxDrops; i++){
        drops[i].showDrops();
        drops[i].updateY();
    }

    drawSprites();
}