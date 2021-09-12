function preload(){
}

function setup() {
    canvas = createCanvas(500, 300);
    canvas.position(480, 300);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function gotPoses(results)
{
    console.log(results);
}

function draw() {
    image(video, 0, 0, 500, 300);
}

function take_snapshot(){
    save('myFilterImage.png');
}