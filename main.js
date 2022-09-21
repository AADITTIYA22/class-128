song = "";
left_wrist_y = 0;
left_wrist_x = 0;
right_wrist_y = 0;
right_wrist_x = 0;
loadSound();
function preload(){
song = loadSound("music.mp3");
   
}

 function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide(); 

    pose_net = ml5.poseNet(video,model_loaded);
    pose_net.on("Pose",gotPoses);
 }

 function draw(){
   image(video,0,0,600,500);
 }

 function model_loaded(){
console.log("modle is loaded");

 }

 function gotPoses(results){
   if(results.length > 0){
      console.log(results);
     left_wrist_x = results[0].pose.leftWrist.x;
     left_wrist_y = results[0].pose.leftWrist.y;
     console.log("the x cordinates of left wrist "+left_wrist_x+" , the y cordinates of left wrist"+left_wrist_y);
     right_wrist_x = results[0].pose.rightWrist.x;
     right_wrist_y = results[0].pose.rightWrist.y;
     console.log("the x cordinates of left wrist "+right_wrist_x+" , the y cordinates of left wrist"+right_wrist_y);


   }
 }

 function play_song(){
   song.play();
   song.setVolume(0.9);
   song.rate(1);
 }

