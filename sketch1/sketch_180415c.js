var incrHue=1;
var rot=0;
var xpos=0;
var ypos=0;
var dia=10;
var incr=1;
var move=1;




function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  background(0);

}

function draw() {
  translate(width/2, height/2);
    rotateAll();
    drawBall();
    seriesBalls();


}


function rotateAll(){
  rotate(radians(rot));
  rot=rot+1;
}

function drawBall() {
  fill(random(0,50), random(0,155), random(0,155));
  ellipse(xpos, ypos, dia, dia);
  xpos=xpos+move;
  ypos=ypos+move;
  dia=dia+incr;
  if ((ypos>=400) || (ypos>=400) ||(dia>=400)) {
    ypos=0;
    xpos=0;
    dia=10;
  }
}

function seriesBalls() {
  for (var i=0; i<400; i=i+50) {
    noFill();
    stroke(120, 130, 60);
    ellipse(i, i, i, i);
  }
}

function mousePressed(){
background(0);
}
