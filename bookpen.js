img="";
objects=[];
status="";

function preload(){
  img=loadImage('bookpen.jpg');
}
function setup(){
    canvas = createCanvas(500,400);
    canvas.center();
}
function draw(){
    image(img,0,0,550,480);
    fill("red");
    nofill();
    stroke("red");
    rect();
}