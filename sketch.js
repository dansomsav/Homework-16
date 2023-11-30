//RANDOM NOTE FOR GITHUB UPDATE!
let myHouse;

function setup() {
  createCanvas(400, 400);
  myHouse = new house();
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  background(35);
  //noStroke();
  myHouse.display();
  cloud(200, 45, 17.5);
  cloud(250, 20, 25);
}

function cloud(x, y, s) {
  push();
  translate(x, y);
  fill(0);
  ellipse(0, 0, s);
  ellipse(10, 10, s * 0.93);
  ellipse(-5, 10, s);
  pop();
}

class house {
  constructor() {}

  display() {
    //scenery
    fill(150);
    ellipse(200, 275, 300, 150);
    fill(100);
    ellipse(75, 300, 300, 150);
    ellipse(325, 300, 300, 150);
    fill(50);
    ellipse(200, 400, 600, 300);
    //backroof
    fill(0);
    quad(105, 185, 300, 185, 260, 100, 155, 100);
    //side
    fill(255);
    rect(175, 225, 100, 100);
    //front
    fill(200);
    rect(250, 225, 50, 100);
    fill(200);
    triangle(225, 175, 275, 175, 250, 100);
    //roof
    fill(0);
    quad(105, 185, 230, 185, 260, 100, 155, 100);
    //chimney
    fill(220);
    rect(185, 100, 30, 35);
    fill(185);
    rect(185, 77, 40, 12);
    fill(150);
    rect(195, 91, 15, 10);
    rect(175, 105, 15, 10);
    rect(197, 110, 12, 10);
    //window
    fill(50);
    rect(150, 225, 35);
    rect(200, 225, 35);
    //door
    fill(100);
    rect(250, 252.5, 25, 45);
  }
}
