var canvas;
var music;
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine, World;
var box;
function preload() {
    music = loadSound("music.mp3");
}


function setup() {
    canvas = createCanvas(400, 400);
    engine = Engine.create()
    world = engine.world;

    //create 4 different surfaces
    wall1 = new wall(380, 349, 53, 53)
    wall2 = new wall(264, 355, 50, 50)
    wall3 = new wall(192, 357, 50, 50)
    wall4 = new wall(61, 367, 50, 50)
    //create box sprite and give velocity
    box = new box(random(20, 750))
    box.velocityY = 5
}

function draw() {
    background("lightgreen");
    engine.update(engine);
    wall1.display()
    wall2.diplay()
    wall3.display()
    wall4.display()
    box.display()
    //create edgeSprite
    createEdgeSprites();
    //add condition to check if box touching surface and make it box
    box.bounceOff(rightEdge)
    box.bounceOff(leftEdge)
    box.bounceOff(wall1)
    box.bounceOff(wall2)
    box.bounceOff(wall3)
    box.bounceOff(wall4)

}
