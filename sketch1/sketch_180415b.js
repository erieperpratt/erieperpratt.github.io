var xoff = 0.0;
var xpos=0;
var ypos=0;
var dia=10;
var incrW=15;
var incrH=14.5;

function setup() {
  createCanvas(windowWidth,windowHeight);
  colorMode(RGB);
  background(0);

}

function draw() {//colored balls
  xoff = xoff + 0.01;
  var n = noise(xoff)*width;
  push();
  for(var x=0; x<height; x=x+random(50,100)){
      fill(random(0,250),random(0,250),random(0,250),100);
      noStroke();
      ellipse(n,x,random(50,80),random(50,80));

    }
    pop();

noStroke();//brush
fill(0);
ellipse(mouseX,mouseY,dia,dia);
}


function mousePressed(){ //brush interaction
dia=dia+incrH;
}

function mouseReleased(){
  dia=dia-10;
}
