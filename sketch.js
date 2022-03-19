let film;

//function preload() {
 // img = loadImage('grid.png');
//}

function setup() {
  createCanvas(800, 800);
  capture = createCapture(VIDEO);
  capture.size(800, 800);
  capture.hide();
  //1noStroke();
  //1fill(0);
}

function draw() {
  background('white');
  image(capture, 0, 0, 800, 800);
  filter(THRESHOLD,6);
  //filter(POSTERIZE,2);
  //filter(GRAY);
  capture.loadPixels();
  const stepSize = round(constrain(mouseX / 8, 6, 32));
  for (let y = 0; y < height; y += stepSize) {
    for (let x = 0; x < width; x += stepSize) {
      const i = y * width + x;
      const darkness = (255 - capture.pixels[i * 4]) / 255;
      const radius = stepSize * darkness;
      rect(x, y, radius, radius);
    }
  }
}