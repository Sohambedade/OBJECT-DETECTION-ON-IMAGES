img = "";
function preload(){
  img = loadImage('download.jpg');
}
function draw() {
    image(img, 0, 0, 640, 620);
    fill("green");
    text("bottle", 45, 75);
    noFill();
    stroke("green");
    rect(30, 60, 550, 550 );
}

function setup() {
    canvas = createCanvas(640, 620);
    canvas.center();
}