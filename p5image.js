var img;
function preload(){
img = loadImage("Hippie.jpg");

}


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255, 8, 0);

  fill(3, 82, 252);
  rect(100, 100, 200, 400);

  fill (5, 255, 9);
  triangle(20, 40, 50, 40, 200, 200);

  image(img, 0, 0);
}
