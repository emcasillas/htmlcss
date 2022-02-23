function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  noFill();
  stroke(random(100,255),random(100,255), random(100,255));
  ellipse(mouseX, mouseY, frameCount%100);
  noStroke();
}
