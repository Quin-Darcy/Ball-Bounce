// Constants
let g = 9.8/10;
let mu = -0.8;
let hardness = 1.001;
let cor = 0.81;
let num_of_balls = 3;
let W = window.innerWidth - 20;
let H = window.innerHeight - 20;
let ID = 0;
let c;
let IMG = false;


let B = [];

function setup() {
    c = createCanvas(W, H);
}

function mousePressed() {
    B.push(new Ball(mouseX, mouseY, width/7, ID, B));
    ID += 1;
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        IMG = true;
    }
}

function draw() {
    background(0);
    for (let i = 0; i < B.length; i++) {
        B[i].collision();
        B[i].move(frameCount/3000);
        B[i].display();
        if (B[i].diam < 0.001) {
            B.slice(i, 1);
        }
    }
    if (IMG) {
        noLoop();
        saveCanvas(c, 'image', 'jpg');
        IMG = false;
        loop();
    }
}
