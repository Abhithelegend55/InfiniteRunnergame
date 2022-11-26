var gameState = "Play"
var human, humanAnimation
var ground, ground_image, invisible_ground;

function preload(){
 humanAnimation = loadAnimation("HumanWalk1.png", "HumanWalk2.png", "HumanWalk3.png", "HumanWalk4.png", "HumanWalk5.png", "HumanWalk6.png", "HumanWalk7.png", "HumanWalk8.png", "HumanWalk9.png", "HumanWalk10.png", "HumanWalk11.png", "HumanWalk12.png", "HumanWalk13.png")
 ground_image = loadImage("Background.png");
}

function setup() {
    createCanvas(600, 500);

    human = createSprite(300, 420, 600, 10);
    human.addAnimation("humanAnimation", humanAnimation);

    ground = createSprite(0, 0, 0, 0);
    ground.addImage("ground_image", ground_image);
    ground.scale = 1.4;
    ground.velocityX = -1
}

function draw() {
    drawSprites();
}