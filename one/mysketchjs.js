function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(96,100,103);
  fill(random(100,255),random(100,255), random(100,255));
  ellipse(mouseX, mouseY, 20)
  noStroke();
}
