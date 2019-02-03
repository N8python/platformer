/*.pde*/
var playerX = 50;
var playerY = 400;
var xVel = 0;
var yVel = 0;
var jumping = false;
var r = false;
var l = false;
level = 1;
function touchingBlue(){
  return (blue(get(int(playerX), playerY))>250 || blue(get(int(playerX-50), playerY-50))>250 || blue(get(int(playerX), playerY-50))>250 || blue(get(int(playerX-50), playerY))>250);

}
function setup(){
  createCanvas(600, 600);
}
function draw(){
  frameRate(60);
  background(220);
  rectMode(RADIUS);
  fill(0);
  rect(playerX-25, playerY-25, 25, 25);
  fill(0, 0, 255);
  rectMode(CENTER);
  noStroke();
  rect(300, 500, 600, 200);
  textSize(20);
  fill(0);
  rectMode(CORNER);
  if (level===1) text("Welcome to the platformer! \n Get to the right side of the screen to advance levels!", 10, 35)
  if (level===2){
      fill(255, 0, 0)
      rect(500, 399, 50, 20)
      rect(200, 399, 50, 20)
      fill(0, 0, 255)
      rect(350, 100, 50, 300)
  }
  if (level===3){
      fill(0, 255, 0)
      rect(100, 399, 50, 20)
      fill(0, 0, 255)
      rect(250, 100, 400, 50)
      fill(255, 0, 0)
      rect(250, 399, 550, 50)
      rect(350, 99, 50, 20)
      rect(550, 99, 50, 20)
  }
  if (level===4){
      fill(0, 255, 0)
      rect(100, 399, 50, 20)
      rect(400, 399, 50, 20)
      fill(255, 0, 0)
      rect(200, 400, 40, 200)
      rect(200, -150, 40, 200)
      rect(500, 400, 40, 200)
      rect(500, -150, 40, 200)
      fill(0)
  }
  if (level===5){
      fill(255, 0, 0)
      rect(400, 400, 200,50)
  }
  if(r) xVel-=0.5;
  if(l) xVel+=0.5;
  playerX+=xVel;
  xVel*=0.9;
  playerX=round(playerX);
  if (touchingBlue()){
    playerY-=1;
    if (touchingBlue()){
      playerY-=1;
      if (touchingBlue()){
        playerY-=1;
        if (touchingBlue()){
          playerY-=1;
          if (touchingBlue()){
            playerY-=1;
            if (touchingBlue()){
              playerX+=xVel*-1;
              playerY-=10;
              if(keyCode===38 && keyPressed){
                if(xVel > 0) xVel=-5;
                else xVel = 5;
                yVel=-10;
              } else {
                xVel = 0;
              }
            }
          }
        }
      }
    }
  }
  yVel+=1;
  playerY+=yVel;
  if (touchingBlue()){
    playerY+=yVel*-1;
    yVel=0;
  }
  playerY+=1;
  if((blue(get(int(playerX), playerY))>250 && jumping) || (blue(get(int(playerX-50), playerY))>250 && jumping)){
    yVel-=20;
  }
  if (red(get(int(playerX), playerY))>250 || red(get(int(playerX-50), playerY-50))>250 || red(get(int(playerX), playerY-50))>250 || red(get(int(playerX-50), playerY))>250){
    playerX=50;
    playerY=400;
    yVel=0;
    xVel=0;
  }
  if (playerX>600){
    playerX=50;
    playerY=600;
    yVel=0;
    xVel=0;
    level+=1;
  }
  if (playerX < 50) playerX = 50;
  if (green(get(int(playerX), playerY))>250 || green(get(int(playerX-50), playerY))>250) yVel = -25;
}
function keyPressed(){
    if (keyCode === 37) r = true;
    if (keyCode === 39) l = true;
    if (keyCode === 38) jumping = true;
}
function keyReleased(){
    if (keyCode === 37) r = false;
    if (keyCode === 39) l = false;
    if (keyCode === 38) jumping = false;
}
