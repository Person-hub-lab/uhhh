music1 = ""; 
music2 = "";

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

score = 0;
songPlaying = "";

function preload(){
    song = loadSound("music.mp3");
    song = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);

    
}

function draw(){
    image(video, 0, 0, 500, 500);
    
    fill("#FF0000");
    stroke("#FF0000");
    if(scoreLeftWrist > 0.2){  circle(leftWristX, leftWristY, 20);
    InNumberLeftWristY = Number(leftWristY);
    remove_decimals = floor(InNumberLeftWristY);
    volume = remove_decimals/500;
    document.getElementById("Volume").innerHTML = "Volume = "+ volume;
    song.setVolume(volume);
  }
}

function modelloaded(){
    console.log("Posenet Is initialized");
}

function gotposes(){
    if(results.legnth > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left Wrist X ="+ leftWristX +"Left Wrist Y ="+ leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("RIght Wrist X ="+ rightWristX +"Rigth Wrist Y ="+ rightWristY);
        
    }
}