var img;

function preload() {

  img = loadImage("images/Hippie.jpg");
}

function setup() {
  createCanvas(600, 600);
}

function draw() {

  image(img, 0, 0);

  fill(3, 82, 252);
  rect(100, 100, 200, 400);

  fill(5, 255, 9);
  triangle(20, 40, 50, 40, 200, 200);

  fill(5, 255, 9);
  triangle(40, 80, 50, 40, 200, 200);



}
