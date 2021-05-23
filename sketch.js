var canvas;
var music;
var block1,block2,block3,block4;
var ball;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(0,550,300,30);
    block1.shapeColor = "red";

    block2 = createSprite(290,550,200,30);
    block2.shapeColor = "blue";
    
    block3 = createSprite(530,550,200,30);
    block3.shapeColor = "black";
    
    block4 = createSprite(750,550,200,30)
    block4.shapeColor = "green";
    
    
    //create box sprite and give velocity
      ball = createSprite(random(20,750),100,40,40);
      ball.shapeColor = "white";
      ball.velocityX = 5;
      ball.velocityY = 5;
    }

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
       edges = createEdgeSprites();
       ball.bounceOff(edges);

    //add condition to check if box touching surface and make it box
if(block1.isTouching(ball) && ball.bounceOff(block1) ){
    ball.shapeColor = "red";
    music.play();
}
if(block1.isTouching(ball)){
  ball.shapeColor="red";
  ball.velocityY=0;
  ball.velocityX=0;
  music.stop();
}

if(block2.isTouching(ball)){
  ball.shapeColor="blue";
  ball.velocityY=0;
  ball.velocityX=0;
  music.stop();
}

if(block3.isTouching(ball)){
  ball.shapeColor="black";
  ball.velocityY=0;
  ball.velocityX=0;
  music.stop();
}

if(block4.isTouching(ball)){
  ball.shapeColor="green";
  ball.velocityX=0;
  ball.velocityY=0;
  music.stop();
}

if(block2.isTouching(ball) && ball.bounceOff(block2) ){
    ball.shapeColor = "blue";

}
if(block3.isTouching(ball) && ball.bounceOff(block3) ){
    ball.shapeColor = "black";
    music.stop();
}
if(block4.isTouching(ball) && ball.bounceOff(block4) ){
  ball.shapeColor = "green";
  music.stop();
}
  drawSprites();
}