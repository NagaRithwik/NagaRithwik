img="";
objects=[];
status="";

function preload(){
  img=loadImage('bottles.jpg');
}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status :- detecting objects";
}
function modelLoaded(){
  console.log("Model Loaded!");
  status = true;
  objectDetector.detect(img , gotResults);
}
function gotResults(error,results){
  if(error){
    console.log(error);
  }
    console.log(results);
    objects = results;
}
function draw(){
    image(img,0,0,640,420);
   
    if(status != ""){
      for(i=0;i<objects.length;i++){
        document.getElementById("status").innerHTML = "Status :- Object Detected";
        fill("red");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label+""+percent+"%",objects[i].x,objects[i].y);
        noFill();
        stroke("red");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
      }
      for(j=0;i<objects.length;j++){
        document.getElementById("status").innerHTML = "Status :- Object Detected";
        fill("red");
        percent = floor(objects[j].confidence * 100);
        text(objects[j].label+""+percent+"%",objects[j].x+15,objects[i].y+15);
        noFill();
        stroke("red");
        rect(objects[j].x,objects[j].y,objects[j].width,objects[j].height);
      }
    }
    
}