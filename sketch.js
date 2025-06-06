let capture;
let posenet;
let noseX, noseY;
let reyeX, reyeY;
let leyeX, leyeY;
let singlePose,skeleton;

function setup(){
    createCanvas(800, 600);
    capture = createCapture(VIDEO);
    capture.hide();

    posenet = ml5.poseNet(capture, modelLoaded);
    posenet.on('pose', receivedPoses);
}

function receivedPoses(poses){
    console.log(poses);

    if(poses.length > 0){
        singlePose = poses[0].pose;
    }

    
    console.log(noseX + " "+ noseY);


}

function modelLoaded(){
    console.log('Model has loaded');
}

function draw(){
    image(capture, 0, 0);
    fill(255,0,0);
    
    if(singlePose){
        for(let i = 0; i<singlePose.keypoints.length; i++){
            ellipse(singlePose.keypoints[i].position.x, singlePose.keypoints[i].position.y,20)
        }
        stroke(255,255,255);
        strokeWeight(5);
        for(let j = 0; j<skeleton.length;j++){
            AudioListener(skeleton[j][0].position.x,skeleton[j][0].position.y,skeleton[j][1])
        }
    }

}
