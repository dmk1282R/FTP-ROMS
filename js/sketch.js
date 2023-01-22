let detailX;
function setup() {
  createCanvas(1000, 800, WEBGL);
  detailX = createSlider(1, 20, 1);
  detailX.position(10, height + 5);
  detailX.style("width", "80px");
}
function draw() {
  background(40, 43, 48);
  fill(256);
  rotate(frameCount * 0.01);
  rotate(frameCount * 0.01);
  rotateX(millis() / 1000);
  rotateY(millis() / 1000);
  cylinder(100, 150, detailX.value(), 1);
}
