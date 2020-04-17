const cvs = document.getElementById("canvas");
const ctx = cvs.getContext('2d');

let px = 180;
let py = -20;
offset = 300;
let bx = 30;
let by = 300;

let bg = new Image();
bg.src = "images/bg.png";
bg.onload = function() {
    ctx.drawImage(this, 0, 0);
}

let fg = new Image();
fg.src = "images/fg.png";
fg.onload = function() {
    ctx.drawImage(this, 0, cvs.height - fg.height);
}

let bird = new Image();
bird.src = "images/bird.png";
bird.onload = function() {
    ctx.drawImage(this, bx, by);
}

let pipeNorth = new Image();
pipeNorth.src = "images/pipeNorth.png";
pipeNorth.onload = function() {
    ctx.drawImage(this, px, py)
}

let pipeSouth = new Image();
pipeSouth.src = "images/pipeSouth.png";
pipeSouth.onload = function() {
    ctx.drawImage(this, px, py + offset)
}

ctx.drawImage(bg,0,0);
function draw() {
    ctx.drawImage(bg, 0, 0);
    ctx.drawImage(pipeNorth, px, py);
    ctx.drawImage(pipeSouth, px, py+offset);
    ctx.drawImage(fg, 0, cvs.height - fg.height);
    ctx.drawImage(bird, bx, by);
}

requestAnimationFrame(draw);