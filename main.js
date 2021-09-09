status = "";
video = "";

function preload(){
   video = loadVideo('video.mp4');
   video.hide();
}
function setup(){
    canvas = createCanvas(500,400);
    canvas.center();
}
function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status:- Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
function draw(){
   image(video,0,0,500,400)
}