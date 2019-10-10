function setup() {
  createCanvas(500, 500);
  background(0);

  for (let i = 1; i < 10; i++){
    //ellipse(i * 50, 50, i * 4);
    //ellipse(i * 50, 100, i * 4);
    //ellipse(i * 50, 150, i * 4);
    //ellipse(i * 50, 200, i * 4);
    //ellipse(i * 50, 250, i * 4)
    //ellipse(i * 50, 300, i * 4);
    //ellipse(i * 50, 350, i * 4);
    //ellipse(i * 50, 400, i * 4);
    //ellipse(i * 50, 450, i * 4);}

for (let j = 1; j < 10; j++){
  fill(0, 255, 150, 255 - j * 25);
     ellipse(i * 50, j * 50, i * 4);}
}
}

function draw() {

  // draws loops over and over.


}
